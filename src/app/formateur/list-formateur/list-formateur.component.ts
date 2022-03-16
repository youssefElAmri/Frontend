import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/services/formateur.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {
  listForm : any[]=[];
  list : any[]=[];
  formateur :any;
  constructor( private Formateurservice : FormateurService) { }

  ngOnInit(): void {
    this.getFormateur();
  }
  getFormateur(){
    this.Formateurservice.getAll().subscribe(element =>{

      this.list=element;
      console.log(this.listForm);

    }, error =>{
      console.log(error);

    })
 }
 delete(id:any){

  Swal.fire({
    title: 'êtes-vous sûr de supprimer ce formateur ?',
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
        'Le formateur est supprimé avec succès ',
        'success'
      )
    }
  });

  this.Formateurservice.deleteformateur(id).subscribe(
    res=>{
      this.ngOnInit();
    },
    err=>{
      console.log(err);

    }
  );
}


}
