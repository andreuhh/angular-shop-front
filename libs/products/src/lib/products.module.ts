import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersModule } from 'libs/orders/src/lib/orders.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';


const routes: Routes = [
    {
        path: 'products',
        component: ProductsListComponent
    }
]

@NgModule({
    imports: [CommonModule, OrdersModule, RouterModule.forChild(routes), ButtonModule, CheckboxModule],
    declarations: [ProductsSearchComponent, CategoriesBannerComponent, ProductItemComponent, FeaturedProductComponent, ProductsListComponent],
    exports: [ProductsSearchComponent, CategoriesBannerComponent, ProductItemComponent, FeaturedProductComponent, ProductsListComponent]
})
export class ProductsModule { }
