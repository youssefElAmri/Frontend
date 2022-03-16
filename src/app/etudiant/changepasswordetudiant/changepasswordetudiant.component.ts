import { FormControl, FormGroup, Validators, FormBuilder, ControlContainer } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
//import Validation from './utils/validation';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-changepasswordetudiant',
  templateUrl: './changepasswordetudiant.component.html',
  styleUrls: ['./changepasswordetudiant.component.css']
})
export class ChangepasswordetudiantComponent implements OnInit {

  form: FormGroup = new FormGroup({

    password: new FormControl(''),
    newpassword: new FormControl(''),
    confirmPassword: new FormControl('')

  });

  submitted = false;

  passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";

  constructor(private EtudiantService: EtudiantService, private formBuilder: FormBuilder, private Router: Router, private route: ActivatedRoute) { }

  id: any;




  //  match(newpassword: string, confirmPassword: string): ValidatorFn {
  //   return (controls: AbstractControl) => {
  //     const control = controls.get(newpassword);
  //     const checkControl = controls.get(confirmPassword);
  //     console.log('fdfdf',control);

  //     if (checkControl?.errors && !checkControl.errors['matching']) {
  //       return null;
  //     }
  //     if (control?.value !== checkControl?.value) {
  //       controls.get(confirmPassword)?.setErrors({ matching: true });
  //       return { matching: true };
  //     } else {
  //       return null;
  //     }
  //   };
  // }

  ngOnInit(): void {
    this.getetudiantbyid();

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
          Validators.maxLength(40),


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

  getetudiantbyid() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.EtudiantService.getById(this.id).subscribe(
      res => {
        this.etudiant = res;
      }
    )
  }

  etudiant: any = {
    password: ''
  }


  changer() {
    let f = new FormData();
    f.append('password', this.etudiant.password);

    this.EtudiantService.update(this.id, f).subscribe(
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
