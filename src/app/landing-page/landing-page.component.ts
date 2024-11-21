import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../components/dashboard/usuario/usuario.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CarruselComponent } from "../pages/carrusel/carrusel.component";
import { EmpleadosComponent } from "../pages/empleados/empleados.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    UsuarioComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    CarruselComponent,
    EmpleadosComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  cargando = true;
  currentCredential!: string[];
  condition = true;

  constructor( private router: Router ) {}

  ngOnInit(): void {
    setTimeout(() => {
      
    }, 100);
  }

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
