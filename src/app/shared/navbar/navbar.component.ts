import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  count:number=0
  constructor(private api:ProductService){}
  ngOnInit(): void {
    this.api.productsShow().subscribe(res=>{
      this.count=res.length
    })
  }

}
