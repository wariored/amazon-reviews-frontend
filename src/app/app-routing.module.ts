import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsModule} from "./products/products.module";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', loadChildren: () => ProductsModule},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
