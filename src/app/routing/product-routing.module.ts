import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductListComponent } from '../products/product-list.components';
import { ProductGuardService } from '../products/product-guard.service';

@NgModule({
    imports:[
        RouterModule.forChild([        
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', 
              canActivate: [ProductGuardService],
              component: ProductDetailComponent }, 
            ]),
    ],
    exports: [ RouterModule ]
})

export class ProductRoutingModule {};