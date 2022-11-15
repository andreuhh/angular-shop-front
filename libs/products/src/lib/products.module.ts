import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from 'libs/orders/src/lib/orders.module';
import { ProductsSearchComponent } from './components/products-search/products-search.component';

@NgModule({
    imports: [CommonModule, OrdersModule,],
    declarations: [ProductsSearchComponent],
    exports: [ProductsSearchComponent]
})
export class ProductsModule { }
