import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Product } from '../interface/product';
import Products from '../../../products-list.json';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive,CurrencyPipe],
  template: `
    <app-star-rating [rating]="2.5"></app-star-rating>
  `,
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})



export class CardDetailsComponent {
  products: Array<Product>=Products;
  bigImgSrc?: string;
  product!:Product;
  @Input() id:string="";
  showImg(pic: string): void {
    this.bigImgSrc = pic;
  }

   createProduct(): Product {
    return {
      id: 0,
      title: '',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: [],
      createdAt: '',
    };
  }

  ngOnInit() {
    this.product = this.products.find((product: Product) => product.id == parseInt(this.id)) || this.createProduct();
  }
}
