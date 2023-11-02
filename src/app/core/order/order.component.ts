import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  total: number = 0
  constructor(private api: ProductService, private router: Router) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/product'])
      this.api.removeAll()
    }, 4000)
    this.total = this.api.calcPrice()
  }

}
