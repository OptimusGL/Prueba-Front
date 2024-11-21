import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../services/error.service';
import { User } from '../../interfaces/user';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    SpinnerComponent,
    MatCardModule
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // @Input() childMessage: string | undefined;
  

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  // @Input({ required: true })
  credential!: string;
  // @Output() messageEvent = new EventEmitter<string>();
  @Output() newItemEvent = new EventEmitter<string>();
  // credential = input.required<string>();
  password: string = '';
  loading: boolean = false;

  constructor(
    private _userService:  UserService,
    private toastr: ToastrService,
    private router: Router,
    private _errorService: ErrorService
  ) {
    console.log("Credential->", this.credential);
  }

  login(value: string) {
    if (this.credential == '' || this.password == '') {
      this.toastr.error('¡Todos los campos son obligatorios!', 'Error');
      this.newItemEvent.emit(this.credential);
      return;
    }

    // Crear el objeto
    const user: User = {
      credential: this.credential,
      password: this.password
    }

    this.newItemEvent.emit(value);

    this.loading = true;
    this._userService.login(user).subscribe({
      next: (response: any) => {
        const token = response.token;
        console.log("Token->",token);
        this.loading = false;
        this.toastr.success("", `¡Bienvenido ${this.credential}!`);
        // this.router.navigate(['/dashboard']);
        this.router.navigate(['/inicio']);
        localStorage.setItem('token',token);
        console.log("Credenciales: ", this.credential, this.password);

      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msgError(e);
      }
      // '4:18
    })
  }
  
  signIn() {
    this.router.navigate(['/signIn']);
  }

}
