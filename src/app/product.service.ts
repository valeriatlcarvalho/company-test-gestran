import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

export interface Config {
  page: number;
  totalPages: number;
  items: Product[];
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  productsUrl = 'http://spakimail.azurewebsites.net/api/Product';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.productsUrl);
  }

}
