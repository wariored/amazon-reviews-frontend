import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductReviewsComponent} from "./product-reviews/product-reviews.component";
import {ReviewsHistoryComponent} from "./reviews-history/reviews-history.component";
import {ProductsRoutingModule} from "./products-routing.module";



@NgModule({
  declarations: [ProductReviewsComponent, ReviewsHistoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  bootstrap: []
})
export class ProductsModule { }
