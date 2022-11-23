import { Component, OnInit } from '@angular/core';
import { Product } from '@bluebits/products';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'products-featured-products',
    templateUrl: './featured-product.component.html',
    styles: []
})
export class FeaturedProductComponent implements OnInit {
    featuredProducts: Product[] = [];

    constructor(private prodService: ProductsService) { }

    ngOnInit(): void {
        this._getFeaturedProducts()
    }

    private _getFeaturedProducts() {
        this.prodService.getFeaturedProducts(4).subscribe(products => {
            this.featuredProducts = products
        })
    }
}
