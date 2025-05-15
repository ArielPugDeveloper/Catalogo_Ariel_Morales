import { Component, OnInit } from '@angular/core'; 
import { ProductCardComponent } from '../product-card/product-card.component'; 
import { ProductService } from '../../services/product.service';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../models/product.model'; 
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, MatCardModule, ProductCardComponent ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];


  constructor(private productService: ProductService, private cartService: CartService) {}


  ngOnInit(): void {
  console.log('Obteniendo productos...');
  const data = this.productService.getProducts();
  console.log('Productos cargados:', data);
  this.products = data;
  }
  addToCart(product: Product) {
    console.log('Agregado al carrito:', product);
    this.cartService.addToCart(product);
  }

  showCart() {
    console.log('Contenido del carrito:', this.cartService.getCart());
  }
}





/*
import { Component, OnInit } from '@angular/core'; 
import { ProductCardComponent } from '../product-card/product-card.component'; 
import { ProductService } from '../../services/product.service';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../models/product.model'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, MatCardModule, ProductCardComponent ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
  console.log('Obteniendo productos...');
  const data = this.productService.getProducts();
  console.log('Productos cargados:', data);
  this.products = data;
  }

  addToCart(product: Product) {
    console.log('Producto agregado desde ProductCardComponent:', product);
  }
}
*/
