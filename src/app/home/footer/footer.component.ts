import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { AboutusConstants, HeaderConstants, SpecialConstants } from '../../appconstants';
import { AdminService } from '../../admin/admin.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  location: any

  constructor(
    public mediaObserver: MediaObserver,
    public productService: ProductService,
    public cartService: CartService,
    private router: Router,
    public adminService: AdminService
  ) {

  }
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceLg: boolean;
  deviceMd: boolean;
  deviceSm: boolean;



  ngOnInit() {
    this.getlocation()
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs';
        this.deviceSm = result.mqAlias === 'sm';
        this.deviceLg = result.mqAlias === 'lg';
        this.deviceMd = result.mqAlias === 'md';
      }
    );
  }

  watchpostion(): Promise<any> {
    return new Promise((reslove, reject) => {
      window.navigator.geolocation.watchPosition(position => {
        reslove({ latitude: position.coords.latitude, longitude: position.coords.longitude })
      }, (err) => {
        reject("error" + err)
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    });

  }

  getlocation() {
    this.watchpostion().then(resp => {
      this.adminService.getlocation(resp.latitude, resp.longitude).subscribe((data: any) => {
        let value = data.plus_code.compound_code
        console.log("lat " + value)
      });
    }, (err) => {
      console.log("error" + err)
    });
  }

  // getAmount(country, quantity): any {
  // var finalPrice;
  // var isCountry;
  // const calculatedQuantity = this.getQuantity(quantity); 
  //   function isUSA() {
  //     var amount = { 5: 560, 10: 525, 15: 460, 20: 445, 25: 440, 30: 430, 35: 420, 40: 415, 45: 410, 50: 405, 55: 400, 60: 395 };
  //     return finalPrice = amount[calculatedQuantity]  * (calculatedQuantity+ 2)
  //   }
  //   function isUK() {
  //     var amount = { 5: 560, 10: 525, 15: 460, 20: 445, 25: 440, 30: 430, 35: 420, 40: 415, 45: 410, 50: 405, 55: 400, 60: 395 };
  //     return finalPrice = amount[calculatedQuantity] * (calculatedQuantity + 2)
  //   }
  //   var countries = {
  //     'USA': isUSA(),
  //     'UK': isUK(),
  //   };
  //   isCountry = countries[country];
  //   console.log(finalPrice + " Final Price");
  //   return finalPrice;

  // }

  // getQuantity(quantity:number) {
  //   const calculatedQuantity  = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].reduce((prev, curr) => Math.abs(curr - quantity) < Math.abs(prev - quantity) ? curr : prev);
  //   console.log(calculatedQuantity + " KGS");
  //   return calculatedQuantity;
  // };






  getHeaderNames(indx: number) { return HeaderConstants[indx]; }

  getSpecialConstants(indx: number) { return SpecialConstants[indx]; }

  getAboutusConstants(indx: number) { return AboutusConstants[indx] }
}
