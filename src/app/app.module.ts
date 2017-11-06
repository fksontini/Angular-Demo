import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppProduct } from './product.component';
import { AppInventory } from './Inventory.component';

import { RouterModule , Routes} from '@angular/router';

const appRoutes: Routes = [
  {path :'Product', component: AppComponent},
  {path:'Inventory',component:AppInventory}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,AppProduct,AppInventory ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
