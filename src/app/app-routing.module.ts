import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './core/product/product.component';
import { ProductDetailsComponent } from './core/product/product-details/product-details.component';
import { CartComponent } from './core/cart/cart.component';
import { OrderComponent } from './core/order/order.component';

const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'product',component:ProductComponent},
  {path:'product/details/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
