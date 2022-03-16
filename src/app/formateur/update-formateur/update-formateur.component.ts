import { FormateurService } from './../../services/formateur.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2'
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

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

  id: any;
  response: any;

  constructor(private route: ActivatedRoute, private formateurservice: FormateurService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.getformateurbyid();


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

  formateur = {

    name: '',
    lastname: '',
    genre: '',
    age: 0,
    specialite: '',
    image : '',
    linkFb: '',
    linkLn: '',
    email: '',
    tel: 0,
    password: '',
    role: '',

  }

  getformateurbyid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.formateurservice.getById(this.id).subscribe(
      (res) => {
        this.response = res,
          this.formateur = this.response
      },
      (err) => {
        console.log(err);

      }
    )
  }

  selectedimage(event: any) {
    this.image = event.target.files[0];

  }

  update() {


    Swal.fire({
      title: 'Vous êtes sûr de mettre à jour le formateur ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Update',
      denyButtonText: `Don't update`,
    }).then((result) => {

      if (result.isConfirmed) {

        let f = new FormData();
        f.append('name', this.formateur.name);
        f.append('lastname', this.formateur.lastname);
        f.append('genre', this.formateur.genre);
        f.append('age', this.formateur.age.toString());
        if (this.image) {
          f.append('image', this.image);
        }
        else {
          f.append('image', this.formateur.image);

        }
        f.append('specialite', this.formateur.specialite);
        f.append('linkFb', this.formateur.linkFb);
        f.append('linkLn', this.formateur.linkLn);
        f.append('email', this.formateur.email);
        f.append('password', this.formateur.password);
        f.append('role', this.formateur.role);
        f.append('tel', this.formateur.tel.toString());
        this.formateurservice.update(this.id, f).subscribe(
          (res) => {
            console.log(res);
            this.router.navigate(['/dashboard/list-formateur'])
          },
          err => {
            console.log(err);

          }
        )

        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

}
