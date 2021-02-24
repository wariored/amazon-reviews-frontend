import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {
  product: Product;
  maxRating: number = 5;
  loading: boolean = false;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute,
              public loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(x => {
      this.loaderService.isLoading.subscribe((v) => {
        this.loading = v;
      });
      this.productsService.getProductById(x.get('productId')).subscribe(
        res => {
          this.product = res;
        },
        error => {
          console.log(error)
          this.product = null;
        }
      )
    });
  }

}
