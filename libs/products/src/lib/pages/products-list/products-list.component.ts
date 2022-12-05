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

    constructor(
        private prodService: ProductsService,
        private catService: CategoriesService,
    ) { }

    ngOnInit(): void {
        this._getProducts();
        this._getCategories();
    }

    private _getProducts(categoriesFilter?: string[]) {
        this.prodService.getProducts(categoriesFilter).subscribe(resProducts => {
            this.products = resProducts;

            console.log(this.products)
        })
    }

    private _getCategories() {
        this.catService.getCategories().subscribe((resCats) => {
            this.categories = resCats;
        });
    }

    categoryFilter(cat: Category) {
        const selectedCategories = this.categories
            .filter((category) => category.checked)
            .map((category) => category._id);
        console.log(selectedCategories);

        this._getProducts(selectedCategories as any);
    }
}
