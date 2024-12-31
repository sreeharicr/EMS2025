import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule, CommonModule,MatCardModule, MatButtonModule, MatInputModule, MatSelectModule,MatToolbarModule]
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
