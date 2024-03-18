import {Routes} from "@angular/router";
import {ParcelFormComponent} from "./parcel-form.component";

export const parcelFormRoutes: Routes = [
    {
        path: '',
        component: ParcelFormComponent,
        data: {
            title: 'Parcel form'
        }
    }
]
