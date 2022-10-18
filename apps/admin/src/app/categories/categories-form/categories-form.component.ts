import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category } from '@bluebits/products';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'admin-categories-form',
    templateUrl: './categories-form.component.html',
    styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
    form: FormGroup;
    isSubmitted = false;
    editMode = false;
    currentCategoryID: string;

    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
        private categoriesService: CategoriesService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            icon: ['', Validators.required],
            color: ['#fff',],
        });

        this._checkEditMOde();
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const category: Category = {
            id: this.currentCategoryID,
            name: this.categoryForm.name.value,
            icon: this.categoryForm.icon.value,
        }

        if (this.editMode) {
            this._updateCategory(category)
        } else {
            this._addCategory(category)
        }
    }

    private _addCategory(category: Category) {
        this.categoriesService.createCategory(category).subscribe(
            (category: Category) => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: `Category ${category.name} is created`, });
                // do redirect to categories page
            }, (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category Not created created' });
            }
        )
    }

    private _updateCategory(category: Category) {
        this.categoriesService.updateCategory(category).subscribe(
            response => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category is updated', });
                // do redirect to categories page
            }, (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category Not updated' });
            }
        )
    }

    private _checkEditMOde() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.editMode = true;
                this.currentCategoryID = params.id;
                this.categoriesService.getCategory(params.id).subscribe(category => {
                    this.categoryForm.name.setValue(category.name);
                    this.categoryForm.icon.setValue(category.icon);
                    this.categoryForm.color.setValue(category.color);
                })
            }
        })
    }

    get categoryForm() {
        return this.form.controls;
    }
}
