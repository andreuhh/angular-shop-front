import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@bluebits/products';

@Component({
    selector: 'bluebits-categories-list',
    templateUrl: './categories-list.component.html',
    styles: []
})
export class CategoriesListComponent implements OnInit {

    // categories = [
    //     {
    //         id: 1,
    //         name: "category-1",
    //         icon: "icon-1"
    //     },
    //     {
    //         id: 2,
    //         name: "category-1",
    //         icon: "icon-1"
    //     },
    //     {
    //         id: 3,
    //         name: "category-1",
    //         icon: "icon-1"
    //     }
    // ]

    categories: Category[] = [];

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit(): void {
        this.categoriesService.getCategories().subscribe(
            (cats) => {
                this.categories = cats;
            }
        )
    }
}
