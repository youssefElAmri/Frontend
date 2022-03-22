import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
  mindate=this.datepipe.transform(new Date(),'yyyy-MM-ddTHH:mm');


  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    nbr: new FormControl(''),
    formateur: new FormControl(''),
    specialite: new FormControl(''),
    image: new FormControl(''),
    groupe: new FormControl(''),
    prix: new FormControl(''),
    technologies: new FormControl('')
  });
  submitted = false;



  listEtud : any[]=[];
  list : any[]=[];

  etudiant : any;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private datepipe :DatePipe,  private formBuilder: FormBuilder,private route:ActivatedRoute,private router:Router,private formationservice :FormationService,private etudiantservice : EtudiantService) { }
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

    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      date: [null, Validators.required],
      nbr: [null, Validators.required],
      formateur: [null, Validators.required],
      specialite: [null, Validators.required],
      image: [null, Validators.required],
      groupe: [null, Validators.required],
      prix: [null, Validators.required],
      technologies: [null, Validators.required],
    });

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
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
   image:'',

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
   if(this.image){
    f.append('image',this.image);
  }

   f.append('groupe',JSON.stringify(this.formation.groupe));
   f.append('prix',this.formation.prix.toString());
   f.append('technologies',this.formation.technologies);



   Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.formationservice.update(this.id , f).subscribe(
        (res)=>{
      console.log(res);
      this.router.navigate(['/dashboard/list-formation'])
        },
        err=>{
          console.log(err);

        }
      )
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      this.router.navigate(['/dashboard/list-formation'])
      Swal.fire('Changes are not saved', '', 'info')
    }
  })





 }
}
