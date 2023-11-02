import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  data:any|IProduct[]
  constructor(private api:ProductService){}
  ngOnInit(): void {
    this.displayAll()
  }
  displayAll(){
    this.api.getAll().subscribe(res=>{
      this.data=res
    })
  }
  addToCart(product:IProduct){
    this.api.addToCart(product)
  }
  removeFromCart(product:IProduct){
    this.api.removeFromCart(product)
  }
}
