import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, Category } from '@bluebits/products';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'bluebits-categories-form',
    templateUrl: './categories-form.component.html',
    styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
    form: FormGroup;
    isSubmitted: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
        private categoriesService: CategoriesService,
    ) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            icon: ['', Validators.required],
        })
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const category: Category = {
            name: this.categoryForm.name.value,
            icon: this.categoryForm.icon.value,
        }

        this.categoriesService.createCategory(category).subscribe(
            response => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category is created' });
                // do redirect to categories page
            }, (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category Not created created' });
            }
        )

    }

    get categoryForm() {
        return this.form.controls;
    }
}
