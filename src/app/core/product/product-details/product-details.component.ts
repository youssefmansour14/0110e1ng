import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0
  data:any|IProduct
  showAdd:boolean=true
  showRemove:boolean=false
  constructor(private api: ProductService, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.params['id']
    this.productId && this.api.getById(this.productId).subscribe(res=>{
      this.data=res
    })
  }
  addToCart(product:IProduct){
    this.showAdd=false
    this.showRemove=true
    this.api.addToCart(product)
  }
  removeFromCart(product:IProduct){
    this.showAdd=true
    this.showRemove=false
    this.api.removeFromCart(product)
  }

}
