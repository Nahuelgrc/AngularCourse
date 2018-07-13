import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({ 
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  productDetailTitle: string = 'Product';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get('id');
    if(id)
    {
      this.getProductById(id);
    }
  }

  getProductById(id: number)
  {
    this._productService.getProductById(id)
    .subscribe(
      prod => {
          this.product = prod;
      },
      error => this.errorMessage = <any>error);
  }
  
  onBack(): void{
    this._router.navigate(['/products']);
  }
}

