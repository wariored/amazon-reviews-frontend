import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductReviewsComponent} from "./product-reviews/product-reviews.component";
import {ReviewsHistoryComponent} from "./reviews-history/reviews-history.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {LoaderInterceptor} from "../services/loader.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoaderService} from "../services/loader.service";
import {ProductsService} from "../services/products.service";


@NgModule({
  declarations: [ProductReviewsComponent, ReviewsHistoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    LoaderService,
    ProductsService
  ],
  bootstrap: []
})
export class ProductsModule {
}
