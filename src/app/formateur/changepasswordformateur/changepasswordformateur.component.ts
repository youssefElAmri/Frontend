import { FormateurService } from './../../services/formateur.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ControlContainer } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, ValidatorFn } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-changepasswordformateur',
  templateUrl: './changepasswordformateur.component.html',
  styleUrls: ['./changepasswordformateur.component.css']
})
export class ChangepasswordformateurComponent implements OnInit {

  form: FormGroup = new FormGroup({

    password: new FormControl(''),
    newpassword: new FormControl(''),
    confirmPassword: new FormControl('')

  });

  submitted = false;

  passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";

  constructor(private FormateurService : FormateurService, private formBuilder: FormBuilder, private Router: Router, private route: ActivatedRoute) { }


  id: any;



  ngOnInit(): void {

    this.getformateurbyid();

    this.form = this.formBuilder.group({

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      newpassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      confirmpassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],


    }

    );
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

  getformateurbyid() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.FormateurService.getById(this.id).subscribe(
      res => {
        this.formateur = res;
      }
    )
  }

  formateur : any = {
    password : ''
  }

  changer() {
    let f = new FormData();
    f.append('password', this.formateur.password);

    this.FormateurService.update(this.id, f).subscribe(
      (res) => {

        console.log(res)
        this.Router.navigate(['/dashboard/list-us'])
      },
      err => {
        console.log(err);

      }
    );

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Mot de Passe changé avec succès !',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
