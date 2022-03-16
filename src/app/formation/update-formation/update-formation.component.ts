import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
  listEtud : any[]=[];
  list : any[]=[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  etudiant : any;

  constructor(private route:ActivatedRoute,private router:Router,private formationservice :FormationService,private etudiantservice : EtudiantService) { }
  id:any;
  response:any;
  ngOnInit(): void {
    this.get();
    this.getEtudiant();

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
  get(){
    this.id=this.route.snapshot.paramMap.get('id');
    this.formationservice.getById(this.id).subscribe(
     (res)=>{
      this.response=res,
      this.formation=this.response},
      (err)=>{
        console.log(err);

      }
    )
  }
  getEtudiant(){
    this.etudiantservice.getAll().subscribe(element =>{

      this.list=element;


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
    linkLn:'',

    groupe:'',
    prix:0,
    technologies:'',



      }
      selectedimage(event:any){
        this.image=event.target.files[0];

      }

      update(){
        let f =new FormData();
        f.append('title',this.formation.title);
        f.append('description',this.formation.description);
        f.append('date',this.formation.date);
        f.append('nbrHeures',this.formation.nbrHeures.toString());
        f.append('formateur',this.formation.formateur);
        f.append('specialite',this.formation.specialite);
        f.append('image',this.image);
        f.append('groupe',this.formation.groupe);
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
