import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'libs/orders/src/lib/services/orders.service';
import { ProductsService } from 'libs/products/src/lib/services/products.service';
import { UsersService } from 'libs/users/src/lib/services/users.service';
import { combineLatest } from 'rxjs';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: []
})
export class DashboardComponent implements OnInit {
    statistics = [];
    constructor(
        private userService: UsersService,
        private productService: ProductsService,
        private ordersService: OrdersService
    ) { }

    ngOnInit(): void {
        combineLatest([
            this.ordersService.getOrdersCount(),
            this.productService.getProductsCount(),
            this.userService.getUsersCount(),
            this.ordersService.getTotalSales()
        ]).subscribe((values) => {
            this.statistics = values;
        });
    }
}
