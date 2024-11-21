import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { count } from 'rxjs';

@Component({
  selector: 'dashboard-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})

export class UsuarioComponent implements OnInit {

  title: string = '';
  name: string = '';
  lastname: string = '';
  credential: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  loading: boolean = false;
  postcode: number = 0;

  private _usuarioService = inject(UsuarioService);
  public USER_DATA: Usuario[] = [];
  public displayedColumns: string[] = [
    'button',
    'name.title',
    'name.first',
    'name.last',
    'location.city',
    'location.state',
    'location.country',
    'location.postcode',
    'email'
  ];
  public dataSource = new MatTableDataSource(this.USER_DATA);
  data: any;

  ngOnInit(): void {

    this._usuarioService.getUsuarios().subscribe((data: any) => {
      this.USER_DATA = data.results[0];
      this.dataSource.data = this.USER_DATA;
      console.log("USER DATA->", this.USER_DATA);
    },
      (err: any) => {
        // this._toastr.error(err.status, 'Opps! Something went wrong');
      }
    );
  }
  
  /*** Zona Table ******************************************************/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /*** End Zona Table **************************************************/

  // mostrar(): void {
    
  //   const addRow = (tableID: string): void => {
  //     console.log("Creando filas");
  //     let tableRef: HTMLTableElement | null = document.getElementById(tableID) as HTMLTableElement;
  //     let newRow: HTMLTableRowElement = tableRef.insertRow(-1);
  //     let newCell: HTMLTableCellElement = newRow.insertCell(0);

  //     let contenido: HTMLElement | null = document.querySelector('#contenido');
  //     fetch('https://randomuser.me/api/?results=5')
  //     .then((r: Response) => r.json())
  //     .then((data: {
  //       results: Array<
  //         {
  //           picture:
  //           {
  //             large: string
  //           },
  //           gender: string,
  //           name:
  //           {
  //             title: string,
  //             first: string,
  //             last: string
  //           },
  //           location:
  //           {
  //             city: string,
  //             state: string,
  //             country: string,
  //             postcode: number
  //           },
  //           email: string
  //         }>
  //     }) => {
  //       if (data.results.length > 0) {
  //         this.USER_DATA = data.results;
  //         this.dataSource.data = this.USER_DATA;
  //       }
  //     });
  //     for (let i = 0; i < this.data.results[0]; i++) {
  //       this.USER_DATA.push({
  //         picture: {
  //           large: ''
  //         },
  //         gender: '',
  //         name: {
  //           title: '',
  //           first: '',
  //           last: ''
  //         },
  //         location: {
  //           city: '',
  //           state: '',
  //           country: '',
  //           postcode: 0
  //         },
  //         email: this.email
  //       })
  //     }

  //     let newText: Text = document.createTextNode(this.data.results.length);
  //     newCell.appendChild(newText);
  //   }
  //   addRow('contenido');

    // for (let i = 0; i < (addRow.length); i++) {
    //   this.USER_DATA.push({
    //     picture: {
    //       large: ''
    //     },
    //     gender: '',
    //     name: {
    //       title: '',
    //       first: '',
    //       last: ''
    //     },
    //     location: {
    //       city: '',
    //       state: '',
    //       country: '',
    //       postcode: 0
    //     },
    //     email: this.email
    //   })
    // }

  

  mostrar(): void {
    fetch('https://randomuser.me/api/?results=0')
      .then((r: Response) => r.json())
      .then((data: {
        results: Array<
          {
            picture:
            {
              large: string
            },
            gender: string,
            name:
            {
              title: string,
              first: string,
              last: string
            },
            location:
            {
              city: string,
              state: string,
              country: string,
              postcode: number
            },
            email: string
          }>
      }) => {
        if (data.results.length > 0) {
          this.USER_DATA = data.results;
          // this.dataSource.data = this.USER_DATA;

          // const addRow = (tableID: string): void => {
          //   let tableRef: HTMLTableElement | null = document.getElementById(tableID) as HTMLTableElement;

          //   let newRow: HTMLTableRowElement = tableRef.insertRow(-1);

          //   let newCell: HTMLTableCellElement = newRow.insertCell(0);

          //   this.USER_DATA = data.results;
          //   this.dataSource.data = this.USER_DATA;

          //   let newText: Text = document.createTextNode(this.data.results.length)
          //   newCell.appendChild(newText);
          // }
          // addRow("contenido");

          // for (let i = 0; i < (addRow.length); i++) {
          //   this.USER_DATA.push({
          //     picture:
          //     {
          //       large: ''
          //     },
          //     gender: '',
          //     name:
          //     {
          //       title: this.title,
          //       first: '',
          //       last: ''
          //     },
          //     location:
          //     {
          //       city: '',
          //       state: '',
          //       country: '',
          //       postcode: this.postcode
          //     },
          //     email: this.email
          //   })
          // }
        }

      });
  }

}
