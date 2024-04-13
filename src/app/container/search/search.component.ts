import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText :string= '';

  // Create event
  @Output()
  searchFor : EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputSearch') searchInputEl : ElementRef

  upDateSearchText(){
    this.searchText=this.searchInputEl.nativeElement.value;
    this.searchFor.emit(this.searchText);
  }

}
