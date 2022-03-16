import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-profile-formateur',
  templateUrl: './profile-formateur.component.html',
  styleUrls: ['./profile-formateur.component.css']
})
export class ProfileFormateurComponent implements OnInit {

  constructor( private data: FormateurService , private route: ActivatedRoute, private router : Router) { }

  
  formateur: any;
  id: any;


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getById(this.id).subscribe(
      res=>{
        this.formateur = res;
      }
    )

  }
  image:any;
    
      selectedimage(event:any){
        this.image=event.target.files[0];
    
      }
    
      ajout(){
        let f =new FormData();
        f.append('name',this.formateur.name);
        f.append('lastname',this.formateur.lastname);
        f.append('genre',this.formateur.genre);
        f.append('age',this.formateur.age.toString());
        if(this.image){
          f.append('image',this.image);}
          else{
            f.append('image',this.formateur.image);
    
          }
        f.append('specialite',this.formateur.specialite);
        f.append('linkFb',this.formateur.linkFb);
        f.append('linkLn',this.formateur.linkLn);
        f.append('email',this.formateur.email);
        f.append('password',this.formateur.password);
        f.append('role',this.formateur.role);
        f.append('tel',this.formateur.tel.toString());
        this.data.update(this.id,f).subscribe(
          (res)=>{
        console.log(res);
        this.router.navigate(['/dashboard/list-formateur'])
          },
          err=>{
            console.log(err);
    
          }
        )
    
      }
  


}
