import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchComponent } from './container/search/search.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { SetBackground } from './CustomDirectives/SetBackground.directiv';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { DisableProductDirective } from './CustomDirectives/disable-product.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ProductListComponent,
    SearchComponent,
    FilterComponent,
    ProductComponent,
    ProductDetailsComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
