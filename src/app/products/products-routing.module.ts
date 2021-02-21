import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductReviewsComponent} from "./product-reviews/product-reviews.component";
import {ReviewsHistoryComponent} from "./reviews-history/reviews-history.component";

const routes: Routes = [
  {path: ':productId/reviews', component: ProductReviewsComponent},
  {path: 'history', component: ReviewsHistoryComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
