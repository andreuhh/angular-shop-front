import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from 'libs/orders/src/lib/orders.module';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [CommonModule, OrdersModule, RouterModule, ButtonModule],
    declarations: [ProductsSearchComponent, CategoriesBannerComponent, ProductItemComponent, FeaturedProductComponent,],
    exports: [ProductsSearchComponent, CategoriesBannerComponent, ProductItemComponent, FeaturedProductComponent]
})
export class ProductsModule { }
