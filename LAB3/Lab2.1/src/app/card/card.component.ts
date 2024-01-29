import { Component } from '@angular/core';
import { ProductShareService } from '../services/product-share.service';
import { Product } from '../interface/product';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products!: Array<Product>;
  quantities: { [key: number]: number } = {};
  totalSalary: number = 0; // New property for total salary

  constructor(private productShareService: ProductShareService) {}

  ngOnInit() {
    this.productShareService.getProducts().subscribe((res: any) => {
      this.products = res;
      this.products.forEach((product, index) => {
        this.quantities[index] = 0;
      });
      this.calculateTotalSalary();
    });
  }

  removeProduct(index: number) {
    this.productShareService.removeFromCart(index);
    this.calculateTotalSalary();
  }

  decreaseQuantity(index: number) {
    if (this.quantities[index] > 0) {
      this.quantities[index]--;
      this.calculateTotalSalary();
    }
  }

  increaseQuantity(index: number) {
    this.quantities[index]++;
    this.calculateTotalSalary();
  }

  calculateTotalSalary() {
    this.totalSalary = this.products.reduce((total, product, index) => {
      return total + this.quantities[index] * product.price;
    }, 0);
  }
}
