import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'dashboard-product',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  listProduct: Product[] = [];
  // data: any[] = [];
  constructor( private _productService: ProductService ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  /** Zona Table ******************************************************/
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'name', 'description'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource(this.listProduct);
  /** End Zona Table **************************************************/

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      console.log("Datos-> ", data);
      this.listProduct = data;
      this.dataSource.data = this.listProduct;
    })
  }

  /** Zona Table ******************************************************/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /** End Zona Table **************************************************/

}
