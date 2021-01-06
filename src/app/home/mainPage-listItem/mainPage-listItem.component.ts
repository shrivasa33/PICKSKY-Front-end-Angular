import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mainPage-listItem',
  templateUrl: './mainPage-listItem.component.html',
  styleUrls: ['./mainPage-listItem.component.scss']
})
export class MainPageListItemComponent implements OnInit {

  @Input() item;
  loadingImage = true;
  constructor(public productService: ProductService,) { }

  ngOnInit() {
  }

  imageLoaded() {
    this.loadingImage = false;
  }

  get loadingImageGetter() {
    return this.loadingImage;
  }

  getImage(imageId) {
    // this.loadingImage = true;
// this.loadingImage = false;
    if (!imageId) {
      return '';
    } else {
      return this.productService.productImageUrl(imageId);
    }
  }


  addProduct(){

  }
  removeProduct() { }
}
