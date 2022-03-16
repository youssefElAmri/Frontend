import { ChangepasswordformateurComponent } from './formateur/changepasswordformateur/changepasswordformateur.component';
import { ChangepasswordetudiantComponent } from './etudiant/changepasswordetudiant/changepasswordetudiant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmploiComponent } from './emploi/add-emploi/add-emploi.component';
import { ListEmploiComponent } from './emploi/list-emploi/list-emploi.component';
import { UpdateEmpComponent } from './emploi/update-emp/update-emp.component';
import { AddEtudiantComponent } from './etudiant/add-etudiant/add-etudiant.component';

import { ListComponent } from './etudiant/list/list.component';
import { ProfiletudiantComponent } from './etudiant/profiletudiant/profiletudiant.component';
import { UpdateComponent } from './etudiant/update/update.component';
import { AddFormateurComponent } from './formateur/add-formateur/add-formateur.component';
import { ListFormateurComponent } from './formateur/list-formateur/list-formateur.component';
import { ProfileFormateurComponent } from './formateur/profile-formateur/profile-formateur.component';
import { UpdateFormateurComponent } from './formateur/update-formateur/update-formateur.component';
import { AddFormationComponent } from './formation/add-formation/add-formation.component';
import { DetailFormationComponent } from './formation/detail-formation/detail-formation.component';
import { ListFormationComponent } from './formation/list-formation/list-formation.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';

const routes: Routes = [

  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},

  { path:'dashboard' , component: DashboardComponent , children:[

    {path: '', redirectTo:'/dashboard/list-us', pathMatch: 'full'},

    { path: 'list-us', component: ListComponent },
    { path: 'ajoutetudiant' , component: AddEtudiantComponent },

    { path: 'updateetudiant/:id' , component: UpdateComponent },
    { path: 'profiletudiant/:id' , component: ProfiletudiantComponent },
    {path : 'Changepasswordetudiant', component: ChangepasswordetudiantComponent},


    { path: 'list-formateur', component: ListFormateurComponent},
    { path: 'ajoutformateur' , component: AddFormateurComponent },
    { path: 'updateformateur/:id' , component: UpdateFormateurComponent },
    { path: 'profilformateur/:id' , component:ProfileFormateurComponent },
    {path: 'Changepasswordformateur', component:ChangepasswordformateurComponent},


    {path:'list-formation', component:ListFormationComponent },
    {path:'detail-formation/:id',component:DetailFormationComponent},
    {path:'add-formation',component:AddFormationComponent},
    {path:'update-formation/:id',component:UpdateFormationComponent},


    {path: 'list-emploi',component:ListEmploiComponent},
    {path: 'add-emploi',component:AddEmploiComponent},
    {path:'update-emp/:id',component:UpdateEmpComponent}


  ] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
