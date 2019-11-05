import { Component, OnInit } from '@angular/core';
import { Product} from '../product';
import { ProductService} from '../productservice';

@Component({
  selector: 'app-product-list',
  templateUrl : './product-list.component.html',
  styleUrls:['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
  constructor(private _productservice :ProductService ){}
  ngOnInit(){

  }
}
