import { Injectable } from '@angular/core';
import {IProduct} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  products: Array<IProduct> = this.getAllProductFromStore();

  constructor() { }

  addProductToStore(product: IProduct) {
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  deleteProductFromStore(id) {
    this.products = this.products.filter(item => item.id !== id);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getAllProductFromStore() {
    return JSON.parse(localStorage.getItem('products')) || [];
  }

  getProductsTotalPrice() {
    let productsTotalPrice = 0;
    this.products.map(item => productsTotalPrice += item.price);

    return productsTotalPrice;
  }
}
