import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
import { MarksOfStudentsComponent } from './marks-of-students/marks-of-students.component';
=======
>>>>>>> f539fcc (initial commit)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet,MarksOfStudentsComponent],
=======
  imports: [RouterOutlet],
>>>>>>> f539fcc (initial commit)
=======
import { ProductDetilesComponent } from './product-detiles/product-detiles.component';
import { NgFor } from '@angular/common';
import { product } from './product.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,ProductDetilesComponent],
>>>>>>> 5bb520c (```text)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'עולם התלמידים';
  acceptedTerms = false;
=======
  title = 'lesson_3';
<<<<<<< HEAD
>>>>>>> f539fcc (initial commit)
}
=======
  product_list: product[] = [
  {productName: "Product 1", factory: "Factory 1", description: "Description 1", price: 10, Discount_percentages: 4.5},
  {productName: "Product 2", factory: "Factory 2", description: "Description 2", price: 20, Discount_percentages: 4.0},
  {productName: "Product 3", factory: "Factory 3", description: "Description 3", price: 30, Discount_percentages: 3.5},
  {productName: "Product 4", factory: "Factory 4", description: "Description 4", price: 40, Discount_percentages: 5.0},
  ];
}
>>>>>>> 5bb520c (```text)
