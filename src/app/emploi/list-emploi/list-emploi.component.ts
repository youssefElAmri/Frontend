import { Component, OnInit } from '@angular/core';
import { EmploiService } from 'src/app/services/emploi.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-list-emploi',
  templateUrl: './list-emploi.component.html',
  styleUrls: ['./list-emploi.component.css']
})
export class ListEmploiComponent implements OnInit {

  list : any[]=[];

  emploi: any;


  constructor( private emploiservice : EmploiService ) { }

  ngOnInit(): void {
    this.getEmploi();
  }

  getEmploi(){
    this.emploiservice.getAll().subscribe(
      response=>{
        this.list=response;
        console.log(this.list);

      },
      error=>{
        console.log(error);


      }
    )
  }
  delete(id:any){

    Swal.fire({
      title: 'êtes-vous sûr de supprimer cet emploi ?',
      text: "C'est irréversible ! ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je suis sûr !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimé !',
          'Le emploi est supprimé avec succès ',
          'success'
        )
      }
    });

   this.emploiservice.deleteemploi(id).subscribe(
     res=>{
       this.ngOnInit();
     },
     err=>{
       console.log(err);

     }
   );
  }





}
