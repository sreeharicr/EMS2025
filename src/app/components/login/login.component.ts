import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class LoginComponent {
  userId: string = '';
  password: string = '';
  role: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.role === 'Admin') {
      this.router.navigate(['/admin']);
    } else if (this.role === 'Faculty') {
      this.router.navigate(['/faculty']);
    } else if (this.role === 'Student') {
      this.router.navigate(['/student']);
    }
  }
}
 