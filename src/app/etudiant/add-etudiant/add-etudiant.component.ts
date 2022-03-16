import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import Swal from 'sweetalert2'
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

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

  constructor(private _etudiant: EtudiantService, private router: Router, private formBuilder: FormBuilder) { }

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

  image: any;


  etudiant = {

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
  selectedimage(event: any) {
    this.image = event.target.files[0];

  }

  ajout() {

    let f = new FormData();
    f.append('name', this.etudiant.name);
    f.append('lastname', this.etudiant.lastname);
    f.append('genre', this.etudiant.genre);
    f.append('age', this.etudiant.age.toString());
    f.append('image', this.image);
    f.append('specialite', this.etudiant.specialite);
    f.append('linkFb', this.etudiant.linkFb);
    f.append('linkLn', this.etudiant.linkLn);
    f.append('email', this.etudiant.email);
    f.append('password', this.etudiant.password);
    f.append('role', this.etudiant.role);
    f.append('tel', this.etudiant.tel.toString());
    this._etudiant.addetudiant(f).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/dashboard/list-us'])
      },
      err => {
        console.log(err);

      }
    )

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Etudiant ajouté avec succès',
      showConfirmButton: false,
      timer: 1500
    })

  }

}

