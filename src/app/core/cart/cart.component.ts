import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/service/product.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  productShow:any=[]
  public totalAmount:number=0
  public showLogin:boolean=false
  loginForm:any|FormGroup
  constructor(private api:ProductService){}
  ngOnInit(): void {
    this.api.productsShow().subscribe(res=>{
      this.productShow=res
      this.totalAmount=this.api.calcPrice()
    })
    this.loginForm=new FormGroup({
      email:new FormControl('',Validators.email),
      name:new FormControl('',Validators.minLength(3)),
      tel:new FormControl('',Validators.minLength(11)),
      address:new FormControl('',Validators.required)
    })
  }
  removeFromCart(product:IProduct){
    this.api.removeFromCart(product)
  }
  emptyList(){
    this.api.removeAll()
  }
  cancel(){
    this.showLogin=false
    this.loginForm.reset()
  }
  onSubmit(){
    this.loginForm.value
    console.log(this.loginForm.value)
    this.loginForm.reset()
  }
}
