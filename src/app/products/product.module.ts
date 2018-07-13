import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.components';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from '../routing/product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [        
    SharedModule,
    ProductRoutingModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
