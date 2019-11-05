import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { RouterModule,  Routes } from '@angular/router';
const appRoutes: Routes =[
  {path:'products',component:ProductListComponent}
{path:'product/:id', component:ProductPageComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent
      RouterModule.forRoot(appRoutes)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
