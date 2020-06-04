import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { HomeComponent } from './home/home.component';
import { AddtenderComponent } from './addtender/addtender.component';
import { ViewcompaniesComponent } from './viewcompanies/viewcompanies.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addcompany', component: AddcompanyComponent },
  { path: 'addtender', component: AddtenderComponent },
  { path: 'viewcompanies', component: ViewcompaniesComponent }


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
