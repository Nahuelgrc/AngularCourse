import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <nav class="navbar navbar-expand-sm bg-light">
      <a class="nav-link" href="#">{{appPageTitle}}</a>
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" [routerLink]="['/welcome']">Home</a> </li>
        <li class="nav-item"><a class="nav-link" [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})

export class AppComponent{ 
  appPageTitle: string = "Nahuel Title";
}
