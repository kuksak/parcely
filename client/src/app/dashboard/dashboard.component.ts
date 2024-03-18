import {Component, ViewEncapsulation} from "@angular/core";
import {ParcelDetailsService} from "../services/parcelDetails.service";
import {ParcelDetails} from "../app.types";

@Component({
        selector: 'dashboard',
        templateUrl: 'dashboard.component.html',
        encapsulation: ViewEncapsulation.None,
        providers: [ParcelDetailsService],
        styleUrl: 'dashboard.css'
    }
)
export class DashboardComponent {
    parcelTableHeaders: string[] = ['id', 'parcelSKU', 'description', 'streetAddress', 'town', 'country', 'deliveryDate'];
    allParcels: ParcelDetails[] = [];

    countrySearch?: string;
    descriptionSearch?: string;

    constructor(private parcelDetailsService: ParcelDetailsService) {
        this.parcelDetailsService.getAllParcelDetails()
            .subscribe((data: ParcelDetails[]) => {
                return this.allParcels = data
            });
    }

    setCountry(value: KeyboardEvent) {
        this.performSearch();
    }

    setDescription(value: KeyboardEvent) {
        this.performSearch();
    }

    performSearch() {
        this.parcelDetailsService.getParcelDetailsByFilterConditions({
            country: this.countrySearch,
            description: this.descriptionSearch
        }).subscribe((data: ParcelDetails[]) => {
            return this.allParcels = data;
        });
    }

}
