import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: HomeComponent },
  { path: 'faculty', component: HomeComponent },
  { path: 'student', component: HomeComponent },
];
