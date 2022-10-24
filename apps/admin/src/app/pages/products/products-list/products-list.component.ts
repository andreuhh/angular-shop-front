import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '@bluebits/products';

@Component({
    selector: 'admin-products-list',
    templateUrl: './products-list.component.html',
    styles: []
})
export class ProductsListComponent implements OnInit {
    products = [];
    constructor(
        private productsService: ProductsService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this._getProducts();
    }

    private _getProducts() {
        this.productsService.getProducts().subscribe(products => {
            this.products = products;
            console.log(this.products);
        })
    }

    updateProduct(productid: string) {
        this.router.navigateByUrl(`products/form/${productid}`);
    }
}
