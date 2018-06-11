import { Component, OnInit } from "@angular/core";
import { MobileServiceService } from "../mobile-service.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  providers: [MobileServiceService]
})
export class ProductListComponent implements OnInit {
  pageTitle = "Mobile Solutions";
  products: any;
  showImg: boolean = true;
  filterProduct: any;

  onNotify(message: string) : void
  {
     
  }

  _listFilter: string;
  get listFilter():string
  {
      return this._listFilter;
  }

  set listFilter(value:string)
  {
      this._listFilter = value;
      this.filterProduct =this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string)
  { 
      filterBy=filterBy.toLocaleLowerCase();
      return this.products.filter((product) => 
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        } 
  
  onChange(){
    this.filterProduct = this.performFilter(this.listFilter);
  } 

  constructor(private service: MobileServiceService) {}

  ngOnInit() {
    this.service.showMobiles().subscribe((result: Response) => {
      this.products = result;
      this.filterProduct = this.products;
    });
  }

  onRatingClicked(message: string): void
  {
    this.pageTitle = 'Product List: ' + message;
  }

  toggleImage(): void {
    this.showImg = !this.showImg;
  }
}
