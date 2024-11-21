import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

  constructor( private router: Router ) {}

  dontFound() {
    // localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
