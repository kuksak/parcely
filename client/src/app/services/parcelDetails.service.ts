import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CreateParcelDetailsRequest, ParcelDetails, ParcelDetailsByFilterConditions} from "../app.types";
import {Observable} from "rxjs";

@Injectable()
export class ParcelDetailsService {

    parcelDetailsBaseURL = 'http://localhost:3000/v1/parcel-details';

    constructor(private httpClient: HttpClient) {
    }

    getAllParcelDetails() {
        return this.httpClient.get<ParcelDetails[]>(this.parcelDetailsBaseURL)
    }

    saveParcelDetails(parcel: Partial<CreateParcelDetailsRequest>): Observable<ParcelDetails> {
        return this.httpClient.post<ParcelDetails>(this.parcelDetailsBaseURL, parcel);
    }

    getParcelDetailsByFilterConditions({country, description}: ParcelDetailsByFilterConditions) {
        let url = `${this.parcelDetailsBaseURL}?`;
        if (description) {
            url += `&description=${description}`
        }
        if (country) {
            url += `&country=${country}`
        }
        return this.httpClient.get<ParcelDetails[]>(url);
    }
}
