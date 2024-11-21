import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCardModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  longText = `Soy Desarrollador Full Stack con más de 15 años de experiencia y 
  sumados también, otros años de experiencia como Diseñador Comercial. Tengo mi 
  familia, soy muy feliz con mi nena y con mi esposa; soy fanático de los vídeojuegos 
  y también soy fanático de los Pittsburgh Steelers; me gusta mucho investigar sobre 
  nuevas tecnologías y también me dedico por mi cuenta a imprimir tazas y playeras 
  por medio de la sublimación, aprovechando mis conocimientos que obtuve en su momento
  como Diseñador.`;

}
