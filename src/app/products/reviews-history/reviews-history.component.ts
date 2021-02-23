import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-reviews-history',
  templateUrl: './reviews-history.component.html',
  styleUrls: ['./reviews-history.component.css']
})
export class ReviewsHistoryComponent implements OnInit {
  products: Product[];
  dataSource: MatTableDataSource<Product>;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductsHistory().subscribe(
      r => {
        this.products = r;
        this.dataSource = new MatTableDataSource(this.products);
      },
      error => console.log(error)
    );
  }

  displayedColumns: string[] = ['productId', 'title', 'createdDate'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
