import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-changepasswordetudiant',
  templateUrl: './changepasswordetudiant.component.html',
  styleUrls: ['./changepasswordetudiant.component.css']
})
export class ChangepasswordetudiantComponent implements OnInit {

  passwordform: FormGroup = new FormGroup ({

    prevpassword: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    newpassword: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmpassword: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  //passwordform : FormGroup;

  submitted = false;

  passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";

  constructor(private EtudiantService: EtudiantService, private formBuilder: FormBuilder, private Router: Router, private route: ActivatedRoute) {}

  get prevpassword() { return this.passwordform.get('prevpassword') }
  get newpassword() { return this.passwordform.get('newpassword') }
  get confirmpassword() { return this.passwordform.get('confirmpassword') }

  id: any;

  ngOnInit(): void {

    this.passwordform = this.formBuilder.group(this.passwordform);
    this.getetudiantbyid();
  }



  get f(): { [key: string]: AbstractControl } {
    return this.passwordform.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.passwordform.invalid) {
      return;
    }
    console.log(JSON.stringify(this.passwordform.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.passwordform.reset();
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
    prevpassword:'',
    newpassword: '',
    confirmpassword:'',
    id : ''
  }


  changerpassword() {
    let f = new FormData();
    f.append('newpassword', this.etudiant.password);
     this.etudiant.id=this.route.snapshot.paramMap.get('id');
    this.EtudiantService.updateetudiantpass(this.etudiant).subscribe(
      (res) => {

        console.log(res)
        this.Router.navigate(['/dashboard/list-us'])
      },
      error => {
        console.log(error);

      }
    );

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Mot de Passe changé avec succès !',
    //   showConfirmButton: false,
    //   timer: 1500
    // });
  }

}
