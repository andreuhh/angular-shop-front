import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from 'libs/orders/src/lib/orders.module';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';

@NgModule({
    imports: [CommonModule, OrdersModule],
    declarations: [ProductsSearchComponent, CategoriesBannerComponent],
    exports: [ProductsSearchComponent, CategoriesBannerComponent]
})
export class ProductsModule {}
