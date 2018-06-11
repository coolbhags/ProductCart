import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MobileServiceService } from './mobile-service.service';
import { HttpModule } from '@angular/http';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    ProductListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    FormsModule
  ],
  providers: [MobileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
