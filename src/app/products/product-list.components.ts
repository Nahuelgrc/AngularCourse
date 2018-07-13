import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    ProductListTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    messageError: string;

    _listFilter: string;
    filteredProducts: IProduct[];
    
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = [];

    constructor(private _productService: ProductService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;    
    }

    ngOnInit(): void {
        
        this._productService.getProducts()
                    .subscribe(
                        products => {
                            this.products = products
                            this.filteredProducts = this.products;
                        },
                        error => this.messageError = <any>error);        
    }
    
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void{
        this.ProductListTitle = 'Product List: ' + message;
    }
}