import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductReviewsComponent} from "./product-reviews/product-reviews.component";
import {ReviewsHistoryComponent} from "./reviews-history/reviews-history.component";

const routes: Routes = [
  {path: '', component: ReviewsHistoryComponent},
  {path: ':productId/reviews', component: ProductReviewsComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
