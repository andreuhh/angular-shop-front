import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from 'libs/orders/src/lib/orders.module';

@NgModule({
    imports: [CommonModule, OrdersModule]
})
export class ProductsModule { }
