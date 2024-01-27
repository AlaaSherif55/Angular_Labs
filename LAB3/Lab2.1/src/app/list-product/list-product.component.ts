import { Component } from '@angular/core';
import Products from '../../../products-list.json';
import { Product } from '../interface/product';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CurrencyPipe,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
   products: Array<Product>=Products;

}
