import {importProvidersFrom, NgModule} from "@angular/core";
import {ParcelFormComponent} from "./parcel-form.component";
import {RouterModule} from "@angular/router";
import {parcelFormRoutes} from "./parcel-form.routing.module";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerModule,
    MatDatepickerToggle
} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAnchor} from "@angular/material/button";
import {MatNativeDateModule, provideNativeDateAdapter} from "@angular/material/core";
import {NgIf} from "@angular/common";
import {MatSelect, MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [ParcelFormComponent],
    imports: [
        RouterModule.forChild(parcelFormRoutes),
        MatCard,
        MatCardContent,
        MatLabel,
        MatInput,
        MatFormField,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepicker,
        FormsModule,
        ReactiveFormsModule,
        MatAnchor,
        MatHint,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        MatSelectModule
    ],
    providers: [
    ]

})
export class ParcelFormModule{

}
