import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styles: []
})
export class ProductsListComponent implements OnInit {
    products: Product[] = [];
    categories: Category[] = [];

    constructor(private prodService: ProductsService, private catService: CategoriesService) { }

    ngOnInit(): void {
        this._getProducts();
        this._getCategories();
    }

    private _getProducts() {
        this.prodService.getProducts().subscribe(resProducts => {
            this.products = resProducts;
        })
    }

    private _getCategories() {
        this.catService.getCategories().subscribe((resCats) => {
            this.categories = resCats;
        });
    }
}
