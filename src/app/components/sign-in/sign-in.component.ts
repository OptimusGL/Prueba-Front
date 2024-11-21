import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { ErrorService } from '../../services/error.service';
import { UserService } from '../../services/user.service';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { SpinnerComponent } from "../../shared/spinner/spinner.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatLabel,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    SpinnerComponent,
    MatCardModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  name: string = '';
  lastname: string = '';
  credential: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) { }

  ngOnInit(): void {
    console.log("¡Iniciando!")
  }

  addUser() {
    alert("Se intenta agregar un usuario");
    if (this.name == '' || this.lastname == '' || this.credential == '' || this.email == '' || this.password == '' || this.repeatPassword == '') {
      this.toastr.error('¡Todos los campos son obligatorios!', 'Error');
      return;
    }

    if (this.password != this.repeatPassword) {
      this.toastr.warning('¡Las contreñas son diferentes!', 'Advertencia');
      return;
    }

    // Crear el objeto
    const user: User = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      credential: this.credential,
    }
    console.log("Usuario-> ", user);

    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.name} ${this.lastname} fue registrado exitosamente", "Usuario Registrado`);
        this.router.navigate(['/']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msgError(e);
        // if (e.error.msg) {
        //   console.log(e.error.msg);
        //   this.toastr.warning(e.error.msg, 'Error');
        // } else {
        //   this.toastr.error('Existe un error en el servidor', 'Error');
        // }
      },
      complete: () => console.info('complete')
    })
    
  }

  backLogin() {
    this.router.navigate(['/']);
  }

}
