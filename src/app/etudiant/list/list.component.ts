import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EtudiantService } from 'src/app/services/etudiant.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listEtud : any[]=[];
  list : any[]=[];

  etudiant : any;

  constructor(private  Etudiantservices : EtudiantService) { }


  ngOnInit(): void {
    this.getEtudiant();
  }
  getEtudiant(){

    this.Etudiantservices.getAll().subscribe(element =>{

      this.list=element;
      console.log(this.listEtud);

    }, error =>{
      console.log(error);

    })
 }


 delete(id:any){


  Swal.fire({
    title: 'êtes-vous sûr de supprimer cet étudiant ?',
    text: "C'est irréversible ! ",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, je suis sûr !'
  }).then((result) => {
    if (result.isConfirmed) {
      this.Etudiantservices.deleteEtudiant(id).subscribe(
        res=>{
          this.ngOnInit();
        },
        err=>{
          console.log(err);

        }
      );
      Swal.fire(
        'Supprimé !',
        'Le étudiant est supprimé avec succès ',
        'success'
      )
    }
  });

}

}
