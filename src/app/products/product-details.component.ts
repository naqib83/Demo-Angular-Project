import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router:Router) { 
    
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
