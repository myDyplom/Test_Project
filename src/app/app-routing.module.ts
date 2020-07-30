import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsListComponent} from './components/productsList/productsList.component';
import {BasketComponent} from './components/basket/basket.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'basket', component: BasketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
