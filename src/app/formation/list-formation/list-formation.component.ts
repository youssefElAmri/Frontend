import { Component, Input, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css'],
})
export class ListFormationComponent implements OnInit {
  formation: any;
  listfor : any[]=[];
  list : any[]=[];


  constructor(private formationservice: FormationService) {}

  ngOnInit(): void {
    this.getformation();

  }
  getformation(){
    this.formationservice.getAll().subscribe(element =>{

      this.list=element;


    }, error =>{
      console.log(error);

    })
 }

 delete(id:any){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.formationservice.deleteformation(id).subscribe(
        res=>{
          this.ngOnInit();
        },
        err=>{
          console.log(err);

        }
      );
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })


 }



}
