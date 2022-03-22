import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

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



  listf: any[] = [];
  list: any[] = [];

  etudiant: any;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};



  constructor( private datepipe :DatePipe,  private formBuilder: FormBuilder, private formationservice: FormationService, private etudiantservice: EtudiantService, private router: Router, private formateurservice: FormateurService) { }

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






  getEtudiant() {
    this.etudiantservice.getAll().subscribe(element => {

      this.list = element;


    }, error => {
      console.log(error);

    })

  }
  getFormateur() {
    this.formateurservice.getAll().subscribe(element => {

      this.listf = element;


    }, error => {
      console.log(error);

    })
  }

  image: any;
  formation = {
    title: '',
    description: '',
    date: '',
    nbrHeures: 0,
    formateur: '',

    specialite: '',


    groupe: '',
    prix: 0,
    technologies: '',



  }
  selectedimage(event: any) {
    this.image = event.target.files[0];

  }

  ajout() {





    let f = new FormData();
    f.append('title', this.formation.title);
    f.append('description', this.formation.description);
    f.append('date', this.formation.date);
    f.append('nbrHeures', this.formation.nbrHeures.toString());
    f.append('formateur', this.formation.formateur);
    f.append('specialite', this.formation.specialite);
    f.append('image', this.image);
    f.append('groupe', JSON.stringify(this.formation.groupe));
    f.append('prix', this.formation.prix.toString());
    f.append('technologies', this.formation.technologies);

    this.formationservice.addformation(f).subscribe(
      (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })


        this.router.navigate(['/dashboard/list-formation'])
      },
      err => {
        console.log(err);

      }
    )



  }

}
