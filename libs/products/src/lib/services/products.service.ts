import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { environment } from '@env/environment';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    apiURLProducts = environment.apiURL + 'products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiURLProducts)
    }

    // getCategory(categoryId: String): Observable<Category> {
    //     return this.http.get<Category>(`${this.apiURLProducts}/${categoryId}`)
    // }

    createProduct(productData: FormData): Observable<Product> {
        return this.http.post<Product>(this.apiURLProducts, productData);
    }

    // updateCategory(category: Category): Observable<Category> {
    //     return this.http.put<Category>(`${this.apiURLProducts}/${category.id}`, category)
    // }

    // deleteCategory(categoryId: string): Observable<any> {
    //     console.log(categoryId);
    //     return this.http.delete<any>(`${this.apiURLProducts}/${categoryId}`)
    // }
}
