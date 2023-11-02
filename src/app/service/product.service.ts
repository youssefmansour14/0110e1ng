import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList = new BehaviorSubject<any>([])
  public cartList: any = []

  constructor(private http: HttpClient) { }
  //#region  crud
  getAll() {
    return this.http.get<IProduct[]>("https://dummyjson.com/products")
  }
  getById(id: number) {
    return this.http.get("https://dummyjson.com/products/" + id)
  }
  addToCart(data: IProduct) {
    this.cartList.push(data)
    this.productList.next(this.cartList)
  }
  //#endregion

  //#region  functions
  productsShow() {
    return this.productList.asObservable()
  }
  // removeFromCart(data: IProduct) {
  //   this.cartList.map((product: IProduct, index: IProduct) => {
  //     if (data.id == product.id) {
  //       this.cartList.splice(index, 1)
  //     }
  //   })
  //   this.productList.next(this.cartList)
  // }
  removeFromCart(data: IProduct) {
    const index = this.cartList.findIndex((product: IProduct) => data.id === product.id);
    if (index !== -1) {
      this.cartList.splice(index, 1);
      this.productList.next([...this.cartList]); // Notify subscribers about the change
    }
  }
  //#endregion
  calcPrice(){
    let total=0
    this.cartList.map((product:any)=>{
      total+=product.price
    })
    return total
  }
  removeAll(){
    this.cartList=[]
    this.productList.next(this.cartList)
  }
}
