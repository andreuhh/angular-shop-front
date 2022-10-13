import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'bluebits-categories-form',
    templateUrl: './categories-form.component.html',
    styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
    form: FormGroup;
    isSubmitted: boolean = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            icon: ['', Validators.required],
        })
    }

    onSubmit() {
        this.isSubmitted = true;
        console.log('ggg');
        if (this.form.invalid) {
            return;
        }

    }

    get categoryForm() {
        return this.form.controls;
    }
}
