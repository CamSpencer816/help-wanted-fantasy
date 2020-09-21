import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IRefinancingProduct } from './refinancing-product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Refinance Information';
  imageWidth = 50;
  imageMargin = 2;
  refiancingProducts: IRefinancingProduct[];
  errorMessage = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getRefinancingProduct().subscribe(
      refinancingProducts => {
        this.refiancingProducts = refinancingProducts;
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }
}
