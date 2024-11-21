import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cargando = true;
  currentCredential!: string[];

  constructor( private router: Router ) {}

  inicio() {
    this.router.navigate(['/inicio']);
  }

  carrusel() {
    this.router.navigate(['/carrusel']);
  }
  
  empleados() {
    this.router.navigate(['/empleados']);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
