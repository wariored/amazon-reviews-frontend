import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productId: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let url = 'products/'+ this.productId + '/reviews';
    this.router.navigateByUrl(url);
  }
}
