import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }
