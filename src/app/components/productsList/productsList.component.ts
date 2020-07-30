import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../../../assets/products';
import {StoreService} from '../../services/store.service';
import {IProduct} from '../../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './productsList.component.html',
  styleUrls: ['./productsList.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsList: Array<IProduct> = PRODUCTS;

  constructor(private store: StoreService) {
  }

  ngOnInit() {
  }

}
