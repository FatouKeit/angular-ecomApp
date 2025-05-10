import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  standalone: true
})
export class ProductsComponent implements OnInit{
  products: any;

  constructor( private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.products = this.productService.getAllProducts();
  }

  handleDelete(product : any) {
    let v = confirm('Etes-vous sûr de vouloir supprimer?');
    if(v) {
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
