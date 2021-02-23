import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(x => {
      this.productsService.getProductById(x.get('productId')).subscribe(
        res => {
          console.log(res);
        },
        error => console.log(error)
      )
    });
  }

}
