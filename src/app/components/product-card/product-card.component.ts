import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../models/product.model'; 
@Component({
  selector: 'app-product-card',
  imports: [MatCardModule,],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() price!: number;
  @Input() imageUrl!: string;

  @Output() add = new EventEmitter<Product>();

  addToCart() {
  const product: Product = {
    id: this.id,
    name: this.name,
    price: this.price,
    imageUrl: this.imageUrl
  };
  console.log('Botón clicado - producto emitido:', product);
  this.add.emit(product);
}
}



/*
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-product-card',
  imports: [MatCardModule,],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();

  addToCart() {
    this.add.emit(this.product);
  }
}*/
