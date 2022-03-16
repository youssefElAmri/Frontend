import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiService } from 'src/app/services/emploi.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {


  id:any;

  formation : any;

  list : any[]=[];
  element :any;

  constructor(private FormationService : FormationService, private router:Router, private route:ActivatedRoute, private EmploiService : EmploiService) { }

  ngOnInit(): void {

    this.getemploibyid();
    this.getallformation();

  }

  getemploibyid(){
    this.id=this.route.snapshot.paramMap.get('id');
    this.EmploiService.getById(this.id).subscribe(
      (res)=>{
       this.element=res,
       this.emploi=this.element},
       (err)=>{
         console.log(err);

       }
     )
  }
  getallformation(){

    this.FormationService.getAll().subscribe(
      response => {
        this.list = response;

      },
      error => {
        console.log(error);
      }
    )

  }

  emploi = {
    title : '',
    description: '',
    dateheure : '',
    endDate : '',
    idFormation : ''
  }



  ajout(){

    this.EmploiService.addemploi(this.emploi).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashboard/list-emploi'])
      },
      err=>{
        console.log(err);

      }
    )
  }

}
