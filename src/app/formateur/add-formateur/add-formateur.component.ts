import { FormateurService } from './../../services/formateur.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    genre: new FormControl(''),
    age: new FormControl(''),
    specialite: new FormControl(''),
    linkFb: new FormControl(''),
    linkLn: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    tel: new FormControl(''),
    role: new FormControl('')
  });

  submitted = false;

  namePattern = "^[a-z0-9_-]{8,15}$";
  lastnamePattern = "^[a-z0-9_-]{8,15}$";
  agePattern = "^[0-9]{1,3}";
  specialitePattern = "^[a-z0-9_-]{10,20}$";
  linkFbPattern = "/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/";
  linkLnPattern = "/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/";
  passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  telephonePattern = "^((\\+216-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  rolePattern = "^[a-z0-9_-]{8,15}$";

  constructor(private Formateurservice : FormateurService ,private router :Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({

      name: ['', Validators.required, [
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],

      lastname: ['', Validators.required, [
        Validators.minLength(6),
        Validators.maxLength(20)
      ]],

      genre: ['', Validators.required],

      age: ['', Validators.required, [
        Validators.minLength(1),
        Validators.maxLength(2)
      ]],
      specialite: ['', Validators.required, [

        Validators.minLength(6),
        Validators.maxLength(20)
      ]],
      linkFb: ['', Validators.required],
      linkLn: ['', Validators.required],
      email: ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required],
      tel: ['', Validators.required],

      role: ['', Validators.required, [

        Validators.minLength(6),
        Validators.maxLength(20)
      ]]
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

  image:any;

  formateur = {

      name: '',
      lastname: '',
      genre: '',
      age: 0,
      specialite: '',
      image: '',
      linkFb: '',
      linkLn: '',
      email: '',
      tel: 0,
      password: '',
      role: '',

  }
  selectedimage(event:any){
    this.image=event.target.files[0];

  }

  ajout(){
    let f =new FormData();
    f.append('name',this.formateur.name);
    f.append('lastname',this.formateur.lastname);
    f.append('genre',this.formateur.genre);
    f.append('age',this.formateur.age.toString());
    f.append('image',this.image);
    f.append('specialite',this.formateur.specialite);
    f.append('linkFb',this.formateur.linkFb);
    f.append('linkLn',this.formateur.linkLn);
    f.append('email',this.formateur.email);
    f.append('password',this.formateur.password);
    f.append('role',this.formateur.role);
    f.append('tel',this.formateur.tel.toString());
    this.Formateurservice.addformateur(f).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboard/list-formateur'])
      },
      err=>{
        console.log(err);

      }
    )

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Formateur ajouté avec succès ! ',
      showConfirmButton: false,
      timer: 1500
    })

  }

}
