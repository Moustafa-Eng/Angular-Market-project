import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {


  @ViewChild('productListComponent') productListComponent : ProductListComponent;
  searchText :string= '';


  resultSearchFor(value : string){
    this.searchText = value;
  }
}
