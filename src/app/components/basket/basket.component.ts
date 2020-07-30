import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  private totalPrice = 0;

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.store.products.map(item => this.totalPrice += item.price);
  }

  deleteProductById(id) {
    this.store.deleteProductFromStore(id);
  }
}
