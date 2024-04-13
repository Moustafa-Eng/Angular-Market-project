import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct : Product;
  products = [
    {
      id: 1,
      name: "Product 1",
      is_in_inventory : true,
      price: 19.99,
      description: "This is the description for Product 1.",
      imageUrl: "https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 2,
      name: "Product 2",
      is_in_inventory : true,
      price: 29.99,
      description: "This is the description for Product 2.",
      imageUrl: "https://m.media-amazon.com/images/I/81k2MCcvAtL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 3,
      name: "Product 3",
      is_in_inventory : false,
      price: 39.99,
      description: "This is the description for Product 20.",
      imageUrl: "https://m.media-amazon.com/images/I/417d-bNRVyL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 4,
      name: "Product 4",
      is_in_inventory : false,
      price: 19.99,
      description: "This is the description for Product 1.",
      imageUrl: "https://m.media-amazon.com/images/I/51ViEx58vJL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 5,
      name: "Product 5",
      is_in_inventory : true,
      price: 29.99,
      description: "This is the description for Product 2.",
      imageUrl: "https://m.media-amazon.com/images/I/51vo-oGHv4L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 6,
      name: "Product 6",
      is_in_inventory : false,
      price: 39.99,
      description: "This is the description for Product 20.",
      imageUrl: "https://m.media-amazon.com/images/I/51QUtHLVTGL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 7,
      name: "Product 7",
      is_in_inventory : false,
      price: 19.99,
      description: "This is the description for Product 1.",
      imageUrl: "https://m.media-amazon.com/images/I/81+AZAuWmlS._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 8,
      name: "Product 8",
      is_in_inventory : true,
      price: 29.99,
      description: "This is the description for Product 2.",
      imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41zSVG5S0JL._AC_UL232_SR232,232_.jpg"
    },
    {
      id: 9,
      name: "Product 9",
      is_in_inventory : false,
      price: 39.99,
      description: "This is the description for Product 20.",
      imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41hBK8G+rYL._AC_SX184_.jpg"
    },
    {
      id: 10,
      name: "Product 10",
      is_in_inventory : true,
      price: 19.99,
      description: "This is the description for Product 1.",
      imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/311SVsNb0eL._AC_SX184_.jpg"
    },
    {
      id: 11,
      name: "Product 11",
      is_in_inventory : false,
      price: 29.99,
      description: "This is the description for Product 2.",
      imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61q2o4tWD+L._AC_SX184_.jpg"
    },
    {
      id: 12,
      name: "Product 12",
      is_in_inventory : true,
      price: 39.99,
      description: "This is the description for Product 20.",
      imageUrl: "https://m.media-amazon.com/images/I/51vo-oGHv4L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 13,
      name: "Product 13",
      is_in_inventory : true,
      price: 19.99,
      description: "This is the description for Product 1.",
      imageUrl: "https://m.media-amazon.com/images/I/51vo-oGHv4L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 14,
      name: "Product 14",
      is_in_inventory : false,
      price: 29.99,
      description: "This is the description for Product 2.",
      imageUrl: "https://m.media-amazon.com/images/I/81+AZAuWmlS._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 15,
      name: "Product 15",
      is_in_inventory : true,
      price: 39.99,
      description: "This is the description for Product 20.",
      imageUrl: "https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 16,
      name: "Product 16",
      is_in_inventory : true,
      price: 19.99,
      description: "This is the description for Product 1.",
      imageUrl: "https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 17,
      name: "Product 17",
      is_in_inventory : false,
      price: 29.99,
      description: "This is the description for Product 2.",
      imageUrl: "https://m.media-amazon.com/images/I/51vo-oGHv4L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      id: 18,
      name: "Product 18",
      is_in_inventory : true,
      price: 39.99,
      description: "This is the description for Product 20.",
      imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/311SVsNb0eL._AC_SX184_.jpg"
    }
  ];

  allProducts = this.products.length;
  inStock = this.products.filter(item => item.is_in_inventory === true).length;
  outOfStock = this.products.filter(item => item.is_in_inventory === false).length;

  selectedButtonFilter:string ='all';
  showWithFilter(value : string){
    this.selectedButtonFilter = value;
  }

  @Input()
  searchText :string= '';
}
