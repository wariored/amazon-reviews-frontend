import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl: string = 'http://localhost:5000/reviews'

  constructor(private http: HttpClient) {
  }

  getProductsHistory(): Observable<Product[]> {
    let url: string = this.productsUrl + "/history/list";
    return this.http.get<Product[]>(url);
  }

  getProductById(productId: string): Observable<Product> {
    let url: string = this.productsUrl + "/" + productId;
    return this.http.get<Product>(url);
  }
}
