import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {IProduct} from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;

  constructor(private store: StoreService) { }

  ngOnInit() { }

  addNewProductToBasket(product: IProduct) {
    this.store.addProductToStore(product);
  }

  isProductAddedToBasket(id) {
   return  this.store.products.some(item => item.id === id);
  }
}
