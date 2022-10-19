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
    apiURLCategories = environment.apiURL + 'products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiURLCategories)
    }

    // getCategory(categoryId: String): Observable<Category> {
    //     return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`)
    // }

    // createCategory(category: Category): Observable<Category> {
    //     return this.http.post<Category>(this.apiURLCategories, category);
    // }

    // updateCategory(category: Category): Observable<Category> {
    //     return this.http.put<Category>(`${this.apiURLCategories}/${category.id}`, category)
    // }

    // deleteCategory(categoryId: string): Observable<any> {
    //     console.log(categoryId);
    //     return this.http.delete<any>(`${this.apiURLCategories}/${categoryId}`)
    // }
}
