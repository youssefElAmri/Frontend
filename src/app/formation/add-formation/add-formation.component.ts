import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  listf : any[]=[];
  list : any[]=[];

  etudiant : any;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor( private formationservice : FormationService, private etudiantservice: EtudiantService, private router : Router , private formateurservice :FormateurService) { }

  ngOnInit(): void {
    this.getEtudiant();
    this.getFormateur();


    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }
  getEtudiant(){
    this.etudiantservice.getAll().subscribe(element =>{

      this.list=element;


    }, error =>{
      console.log(error);

    })

 }
 getFormateur(){
  this.formateurservice.getAll().subscribe(element =>{

    this.listf=element;


  }, error =>{
    console.log(error);

  })
}

  image:any;
  formation={
    title:'',
    description:'',
    date:'',
    nbrHeures:0,
    formateur:'',
    specialite:'',
    groupe:'',
    prix:0,
    technologies:'',
  }

  selectedimage(event:any){
    this.image=event.target.files[0];

  }

  ajout(){

    let f =new FormData();
    f.append('title',this.formation.title);
    f.append('description',this.formation.description);
    f.append('date',this.formation.date);
    f.append('nbrHeures',this.formation.nbrHeures.toString());
    f.append('formateur',this.formation.formateur);
    f.append('specialite',this.formation.specialite);
    f.append('image',this.image);
    f.append('groupe',JSON.stringify(this.formation.groupe));
    f.append('prix',this.formation.prix.toString());
    f.append('technologies',this.formation.technologies);

    this.formationservice.addformation(f).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboard/list-formation'])
      },
      err=>{
        console.log(err);

      }
    )



  }

}
