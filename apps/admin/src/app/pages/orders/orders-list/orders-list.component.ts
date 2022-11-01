import { Component, OnInit } from '@angular/core';
import { Order, OrdersService } from '@bluebits/orders';
import { ORDER_STATUS } from '../order.constants';

@Component({
    selector: 'admin-orders-list',
    templateUrl: './orders-list.component.html',
    styles: []
})
export class OrdersListComponent implements OnInit {
    orders: Order[] = [];
    orderStatus = ORDER_STATUS;

    constructor(private ordersService: OrdersService) { }

    ngOnInit(): void {
        this._getOrders()
    }

    _getOrders() {
        this.ordersService.getOrders().subscribe((orders) => {
            this.orders = orders;
        });
    }
}
