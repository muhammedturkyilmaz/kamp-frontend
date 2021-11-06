import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44340/api/products/getall"

  constructor(private httpClinet: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
   return this.httpClinet.get<ProductResponseModel>(this.apiUrl)
  }
}
