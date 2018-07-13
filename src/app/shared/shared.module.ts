import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  imports: [
    BarRatingModule,
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports:[
    BarRatingModule,
    StarComponent,
    CommonModule,
    FormsModule  
  ]
})
export class SharedModule { }
