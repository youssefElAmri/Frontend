import { AuthentificationService } from './../../services/authentification.service';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router , private adminService : AdminService, private route : ActivatedRoute, private auth: AuthentificationService) { }

  id:any;

  admin : any;
  image : any;

  ngOnInit(): void {

    this.id = this.auth.getUserData()._id;
    this.getbyid();
  }
  getbyid(){


    this.adminService.getById(this.id).subscribe(
      res=>{
        this.admin = res;
        console.log(this.admin);


      }
    )
  }


  selectedimage(event:any){
    this.image=event.target.files[0];

  }


  logout(){
    localStorage.removeItem('tkn');
    this.router.navigate(['/login']);

  }

}
