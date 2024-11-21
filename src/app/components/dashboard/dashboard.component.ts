import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UsuarioComponent } from './usuario/usuario.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  // imports: [NavbarComponent, ProductComponent],
  imports: [NavbarComponent, UsuarioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

 

}
