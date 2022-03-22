import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {

  formation :any;
  id :any;
  listfor : any[]=[];
  list : any[]=[];



  constructor(private formationservice :FormationService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getbyid();
    this.getformation();

  }


  getbyid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.formationservice.getById(this.id).subscribe(
      res=>{
        this.formation = res;
      }
    )
  }
  getformation(){
    this.formationservice.getAll().subscribe(element =>{

      this.list=element;


    }, error =>{
      console.log(error);

    })

 }
  image:any;

  selectedimage(event:any){
    this.image=event.target.files[0];

  }





}
