import { Component, Input } from '@angular/core';
import { product } from '../product.interface';

@Component({
  selector: 'app-product-detiles',
  standalone: true,
  imports: [],
  templateUrl: './product-detiles.component.html',
  styleUrl: './product-detiles.component.css'
})
export class ProductDetilesComponent {
  @Input() myProduct: product = {
    productName: "",
    factory: "",
    description: "",
    price: 0,
    Discount_percentages: 0
  };
  get after_Discount_percentages(): number {
    return this.myProduct.price * (1 - this.myProduct.Discount_percentages / 100);
  }
}
