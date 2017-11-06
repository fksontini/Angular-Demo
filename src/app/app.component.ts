import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
  selector: 'my-app',
  template: `<ul>
<li><a [routerLink] = "['/Product']">Product</a></li>
  <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
</ul>
<router-outlet></router-outlet>`,
 // providers: [ProductService]
})

export   class   AppComponent  {
/** iproducts: IProduct[];
  constructor(private _product: ProductService) {
  }
  
  ngOnInit() : void {
     this._product.getproducts()
     .subscribe(iproducts => this.iproducts = iproducts);
  }

  */
}
// export class AppComponent  { 
//   appTitle: string = 'Welcome';
//   appStatus: boolean = true;
//   appList : any[] = [
//     {
//       "ID":"1",
//       "url":"app/Images/One.jpg"
//     },
//     {
//       "ID":"2",
//       "url":"app/Images/two.jpg"
//     }
//   ];
// }
