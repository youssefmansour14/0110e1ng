import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductComponent } from './core/product/product.component';
import { ProductDetailsComponent } from './core/product/product-details/product-details.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCart4 } from '@ng-icons/bootstrap-icons';
import { CartComponent } from './core/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './core/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ bootstrapCart4 }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
