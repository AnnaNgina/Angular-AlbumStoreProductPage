import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector:'app-product-description',
  templateUrl:'./product-description.component.html',
  styleUrls: ['./product-description.component.css']
  })
  export class ProductDescriptionComponent implements OnInit{
  constructor (private_ProductService: ProductService)  {}
  ngOnInit(){
    this.private_ProductService.e
  }
  }
