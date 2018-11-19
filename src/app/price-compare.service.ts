import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class PriceCompareService {

  constructor(public http:Http) { }
  getProductHtml(productName){
    return this.http.get('http://www.pricetree.com/search.aspx?q='+productName)    
 }
 getProductLink(productId){
     return this.http.get("http://www.pricetree.com/dev/api.ashx?pricetreeId="+productId+"&apikey=7770AD31-382F-4D32-8C36-3743C0271699")     
  }

}
