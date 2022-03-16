import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-profiletudiant',
  templateUrl: './profiletudiant.component.html',
  styleUrls: ['./profiletudiant.component.css']
})
export class ProfiletudiantComponent implements OnInit {

  constructor( private data: EtudiantService , private route: ActivatedRoute, private router : Router ) { }


  etudiant: any;
  id: any;


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getById(this.id).subscribe(
      res=>{
        this.etudiant = res;
      }
    )

  }
  image:any;
    
      selectedimage(event:any){
        this.image=event.target.files[0];
    
      }
    
      ajout(){
        let f =new FormData();
        f.append('name',this.etudiant.name);
        f.append('lastname',this.etudiant.lastname);
        f.append('genre',this.etudiant.genre);
        f.append('age',this.etudiant.age.toString());
        if(this.image){
          f.append('image',this.image);}
          else{
            f.append('image',this.etudiant.image);
    
          }
        f.append('specialite',this.etudiant.specialite);
        f.append('linkFb',this.etudiant.linkFb);
        f.append('linkLn',this.etudiant.linkLn);
        f.append('email',this.etudiant.email);
        f.append('password',this.etudiant.password);
        f.append('role',this.etudiant.role);
        f.append('tel',this.etudiant.tel.toString());
        this.data.update(this.id,f).subscribe(
          (res)=>{
        console.log(res);
        this.router.navigate(['/dashboard/list-us'])
          },
          err=>{
            console.log(err);
    
          }
        )
    
      }
  

 

}
