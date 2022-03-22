import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})


export class AddfeedbackComponent implements OnInit {

  list : any[]=[];
  formation :any;

  constructor(private feedbackservice : FeedbackService , private router : Router, private formationservice:FormationService) { }

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






  feedback={
    idUser:'',
    text:'',

    idFormation:'',




  }


  ajout(){

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    this.feedbackservice.addFeedback(this.feedback).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/dashetudiant/agenda'])
      },
      err=>{
        console.log(err);

      }
    )



  }

}
