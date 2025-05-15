import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Producto 1', price: 100, imageUrl: 'assets/product1.jpg' },
    // Más productos
  ];

  getProducts(): Product[] {
    return [
      { id: 1, name: 'Producto 1', price: 100, imageUrl: 'assets/pug1.png' },
      { id: 2, name: 'Producto 2', price: 200, imageUrl: 'assets/pug2.png' },
      { id: 2, name: 'Producto 2', price: 200, imageUrl: 'assets/pug2.png' },
      { id: 2, name: 'Producto 2', price: 200, imageUrl: 'assets/pug2.png' },
      { id: 2, name: 'Producto 2', price: 200, imageUrl: 'assets/pug2.png' },
      { id: 2, name: 'Producto 2', price: 200, imageUrl: 'assets/pug2.png' },
      { id: 2, name: 'Producto 2', price: 200, imageUrl: 'assets/pug2.png' },
      { id: 2, name: 'Producto 2', price: 200, imageUrl: 'assets/pug2.png' },
      { id: 2, name: 'Producto 2', price: 200, imageUrl: 'assets/pug2.png' },

    ];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  editProduct(updated: Product) {
    const index = this.products.findIndex(p => p.id === updated.id);
    if (index !== -1) this.products[index] = updated;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}