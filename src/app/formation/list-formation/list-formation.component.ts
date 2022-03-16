import { Component, Input, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css'],
})
export class ListFormationComponent implements OnInit {
  formation: any;
  listfor: any[] = [];
  list: any[] = [];


  constructor(private formationservice: FormationService) { }

  ngOnInit(): void {
    this.getformation();

  }
  getformation() {
    this.formationservice.getAll().subscribe(element => {

      this.list = element;


    }, error => {
      console.log(error);

    })
  }

  delete(id: any) {

    Swal.fire({
      title: 'êtes-vous sûr de supprimer cette formation ?',
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
          'La formation est supprimé avec succès ',
          'success'
        )
      }
    }); this.formationservice.deleteformation(id).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err);

      }
    );
  }



}
