import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidbarComponent } from './dashboard/sidbar/sidbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListComponent } from './etudiant/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormateurComponent } from './formateur/formateur.component';
import { ListFormateurComponent } from './formateur/list-formateur/list-formateur.component';
import { AddEtudiantComponent } from './etudiant/add-etudiant/add-etudiant.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './etudiant/update/update.component';
import { ProfiletudiantComponent } from './etudiant/profiletudiant/profiletudiant.component';
import { AddFormateurComponent } from './formateur/add-formateur/add-formateur.component';
import { UpdateFormateurComponent } from './formateur/update-formateur/update-formateur.component';
import { ProfileFormateurComponent } from './formateur/profile-formateur/profile-formateur.component';
import { FormationComponent } from './formation/formation.component';
import { ListFormationComponent } from './formation/list-formation/list-formation.component';
import { DetailFormationComponent } from './formation/detail-formation/detail-formation.component';
import { AddFormationComponent } from './formation/add-formation/add-formation.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';
import { EmploiComponent } from './emploi/emploi.component';
import { ListEmploiComponent } from './emploi/list-emploi/list-emploi.component';
import { AddEmploiComponent } from './emploi/add-emploi/add-emploi.component';
import { UpdateEmpComponent } from './emploi/update-emp/update-emp.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangepasswordetudiantComponent } from './etudiant/changepasswordetudiant/changepasswordetudiant.component';
import { ChangepasswordformateurComponent } from './formateur/changepasswordformateur/changepasswordformateur.component';
import { LoginComponent } from './login/login.component';
import { DashetudiantComponent } from './dashetudiant/dashetudiant.component';
import { DashformateurComponent } from './dashformateur/dashformateur.component';
import { DepotComponent } from './depot/depot.component';
import { FeedbacketudiantComponent } from './feedbacketudiant/feedbacketudiant.component';
import { QuestionComponent } from './question/question.component';
import { AddfeedbackComponent } from './feedbacketudiant/addfeedback/addfeedback.component';
import { ListfeedbackComponent } from './feedbacketudiant/listfeedback/listfeedback.component';
import { HeaderetudiantComponent } from './dashetudiant/headeretudiant/headeretudiant.component';
import { SidebaretudiantComponent } from './dashetudiant/sidebaretudiant/sidebaretudiant.component';
import { FooteretudiantComponent } from './dashetudiant/footeretudiant/footeretudiant.component';
import { EtudiantquestionComponent } from './question/etudiantquestion/etudiantquestion.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidbarComponent,
    DashboardComponent,
    FooterComponent,
    EtudiantComponent,
    ListComponent,
    FormateurComponent,
    ListFormateurComponent,
    AddEtudiantComponent,
    UpdateComponent,
    ProfiletudiantComponent,
    AddFormateurComponent,
    UpdateFormateurComponent,
    ProfileFormateurComponent,
    FormationComponent,
    ListFormationComponent,
    DetailFormationComponent,
    AddFormationComponent,
    UpdateFormationComponent,
    EmploiComponent,
    ListEmploiComponent,
    AddEmploiComponent,
    UpdateEmpComponent,
    ChangepasswordetudiantComponent,
    ChangepasswordformateurComponent,
    LoginComponent,
    DashetudiantComponent,
    DashformateurComponent,
    DepotComponent,
    FeedbacketudiantComponent,
    QuestionComponent,
    AddfeedbackComponent,
    ListfeedbackComponent,
    HeaderetudiantComponent,
    SidebaretudiantComponent,
    FooteretudiantComponent,
    EtudiantquestionComponent,
    AgendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
