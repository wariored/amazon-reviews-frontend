import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductReviewsComponent} from "./product-reviews/product-reviews.component";
import {ReviewsHistoryComponent} from "./reviews-history/reviews-history.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [ProductReviewsComponent, ReviewsHistoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  bootstrap: []
})
export class ProductsModule { }
