import {Component, ViewEncapsulation} from "@angular/core";
import {ParcelDetailsService} from "../services/parcelDetails.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormErrorStateMatcher} from "../helper/form-error-state-matcher";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CreateParcelDetailsRequest, ParcelDetails} from "../app.types";
import {Router} from "@angular/router";


@Component({
    selector: 'parcel-form',
    templateUrl: 'parcel-form.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ParcelDetailsService, provideNativeDateAdapter()]
})
export class ParcelFormComponent {

    constructor(
        private parcelDetailsService: ParcelDetailsService,
        private snackBar: MatSnackBar,
        private router: Router,
    ) {
    }

    countries = [
        {value: "Estonia"},
        {value: "Lithuania"},
        {value: "Latvia"},
        {value: "Finland"},
        {value: "Sweden"}
    ]

    parcelForm = new FormGroup({
        parcelSku: new FormControl('', [Validators.required, Validators.minLength(8)]),
        description: new FormControl('', []),
        streetAddress: new FormControl('', [Validators.required, Validators.minLength(6)]),
        town: new FormControl('', [Validators.required, Validators.minLength(6)]),
        country: new FormControl('', [Validators.required]),
        deliveryDate: new FormControl('', [Validators.required])
    });

    matcher = new FormErrorStateMatcher();

    get parcel() {
        return this.parcelForm.controls;
    }

    onSubmit() {
        if (this.parcelForm.invalid) {
            this.snackBar.open("Form validation failed. One or more mandatory fields are missing!", 'Close', {
                duration: 3000,
            }, )
            return;
        }

        const deliveryDate = new Date(Date.parse(this.parcelForm.controls.deliveryDate.getRawValue()!)).toDateString();

        const parcelDetail: Partial<CreateParcelDetailsRequest> = {
            ...this.parcelForm.value,
            deliveryDate
        }

        this.parcelDetailsService.saveParcelDetails(parcelDetail)
            .subscribe((data: any) => {
                this.snackBar.open("Parcel created successfully", 'Close', {
                    duration: 3000
                });
                this.router.navigate(['/dashboard'])
            })
    }

}
