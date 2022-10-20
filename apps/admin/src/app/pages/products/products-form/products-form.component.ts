import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, Product, ProductsService } from '@bluebits/products';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'admin-products-form',
    templateUrl: './products-form.component.html',
    styles: []
})
export class ProductsFormComponent implements OnInit {
    editMode = false;
    isSubmitted = false;
    form: FormGroup;
    categories = [];
    imageDisplay: string | ArrayBuffer;

    constructor(private formBuilder: FormBuilder, private productService: ProductsService, private categoriesService: CategoriesService, private messageService: MessageService) { }

    ngOnInit(): void {
        this._initForm();
        this._getCategories();
    }

    private _initForm() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            brand: ['', Validators.required],
            price: ['', Validators.required],
            category: ['', Validators.required],
            countInStock: ['', Validators.required],
            description: ['', Validators.required],
            richDescription: [''],
            //image: [''],
            isFeatured: [false],
        })
    }

    private _getCategories() {
        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories
        })
    }

    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) return;

        const productFormData = new FormData();

        Object.keys(this.productForm).map((key) => {
            productFormData.append(key, this.productForm[key].value);
        })

        this._addProduct(productFormData);
    }

    _addProduct(productData: FormData) {
        this.productService.createProduct(productData).subscribe(
            (product: Product) => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: `Product ${product.name} is created`, });
                // need redirect
            }, (error) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Product Not created' });
            }
        )
    }

    onImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.form.patchValue({ image: file });
            this.form.get('image').updateValueAndValidity();
            const fileReader = new FileReader();
            fileReader.onload = () => {
                this.imageDisplay = fileReader.result;
            }
            fileReader.readAsDataURL(file);
        }
    }

    get productForm() {
        return this.form.controls;
    }
}
