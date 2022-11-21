import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '@bluebits/products';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { CategoriesService } from '../../services/categories.service';

@Component({
    selector: 'products-categories-banner',
    templateUrl: './categories-banner.component.html',
})
export class CategoriesBannerComponent implements OnInit, OnDestroy {
    categories: Category[] = [];
    endSubs$: Subject<any> = new Subject();

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit(): void {
        this.categoriesService
            .getCategories()
            .pipe(takeUntil(this.endSubs$))
            .subscribe((categories) => {
                console.log(categories)
                this.categories = categories;
            });

    }

    ngOnDestroy() {
        //this.endSubs$.next();
        this.endSubs$.complete();
    }
}
