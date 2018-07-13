import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IProduct } from "./products";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class ProductService{
    private _productUrl = './assets/products.json';

    constructor(private _http: HttpClient){ }

    getProducts(): Observable<IProduct[]>{    
        return this._http.get<IProduct[]>(this._productUrl).pipe(
            map(data => data),
            catchError(this.handleError), );
    }

    getProductById(id: number): Observable<IProduct>{
        return this.getProducts().pipe(
            map(products => products.find(p => p.productId === id)));
    }

    private handleError(err: HttpErrorResponse){        
        console.error(err.message);
        return Observable.throw(err.message);
    }
}