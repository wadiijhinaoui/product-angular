import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-products-front',
  templateUrl: './products-front.component.html',
  styleUrls: ['./products-front.component.css']
})
export class ProductsFrontComponent implements OnInit {
  public productList: any
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        console.log(res);
      })

  }



}
