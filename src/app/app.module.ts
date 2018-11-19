import { PriceCompareService } from './price-compare.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EcommereceComponent } from './ecommerece/ecommerece.component';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ContaintersComponent } from './containters/containters.component';


@NgModule({
  declarations: [
    AppComponent,
    EcommereceComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    ContaintersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PriceCompareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
