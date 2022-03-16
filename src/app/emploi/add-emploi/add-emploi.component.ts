import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiService } from 'src/app/services/emploi.service';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-add-emploi',
  templateUrl: './add-emploi.component.html',
  styleUrls: ['./add-emploi.component.css']
})
export class AddEmploiComponent implements OnInit {
  list : any[]=[];
  formation :any;
  constructor(private emploiservice : EmploiService,private formationservice:FormationService, private router:Router) { }

  ngOnInit(): void {

    this.getformation();
  }


  getformation(){
    this.formationservice.getAll().subscribe(
      response=>{
        this.list=response;
      },
      error=>{
        console.log(error);

      }
    )
  }


  emploi={
    title:'',
    description:'',
    dateheure: '',
    endDate : '',
    idFormation:'',
  }


  ajout(){

    this.emploiservice.addemploi(this.emploi).subscribe(
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
