import { PriceCompareService } from './../price-compare.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommerece',
  templateUrl: './ecommerece.component.html',
  styleUrls: ['./ecommerece.component.css']
})
export class EcommereceComponent {  
  search:string="";
  showTable:boolean= true;
  priceTreeResponse:any;
  priceTreeProductLink:string="";
  finalProductLink:any="";
  json:any="";
  finalData;
  

  constructor(public priceCompare : PriceCompareService) {}

    getProductId(productName){
        this.priceCompare.getProductHtml(productName).subscribe((res)=>{
          this.priceTreeResponse=res;
          var pos = (this.priceTreeResponse._body).search('<div class="items-wrap">');
          var i=0;
          console.log(pos);
          while(this.priceTreeResponse._body[pos+91+i]!='"')
              {
                  this.priceTreeProductLink+=this.priceTreeResponse._body[pos+91+i];
                  i++;
              }
          console.log(this.priceTreeProductLink);
          var value = this.priceTreeProductLink.match(/-price-(\d+)/i)[1];
          console.log(value);
          this.finalProductSearch(value);  
          
      });
    }
  
  
finalProductSearch(productId){
  this.priceCompare.getProductLink(productId).subscribe((result)=>{
      this.finalProductLink=result;
      this.json=JSON.parse(this.finalProductLink._body);
      this.finalData = this.json.data;
      console.log(this.finalData);
      
  });
}

}
