import { AuthentificationService } from './../services/authentification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  admin ={
    email:'',
    password:''
  }

  token : any;
  login(){
    this.auth.login(this.admin).subscribe(
      (res)=>{

      console.log(res);
      this.token= res;
      localStorage.setItem('tkn',this.token.myToken);
      this.router.navigate(['/dashboard']);
      },
      err=>{
        console.log(err);


      }
    );

  }

  constructor(private auth : AuthentificationService , private router : Router) { }

  ngOnInit(): void {
  }

}
