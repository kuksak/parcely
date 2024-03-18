import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ParcelDetails} from "./parcelDetails.entity";
import {Repository} from "typeorm";

@Injectable()
export class ParcelDetailsService {

    constructor(
        @InjectRepository(ParcelDetails)
        private readonly parcelDetailsRepository: Repository<ParcelDetails>,
    ) {
    }

    async getParcelDetails(): Promise<ParcelDetails[]> {
        return this.parcelDetailsRepository
            .createQueryBuilder("parcel_details")
            .orderBy("CASE WHEN parcel_details.country = 'Estonia' THEN 0 ELSE 1 END")
            .addOrderBy("parcel_details.deliveryDate", "ASC")
            .getMany();
    }

    async createParcelDetails(parcelDetails: ParcelDetails): Promise<ParcelDetails> {
        return this.parcelDetailsRepository.save(parcelDetails);
    }

    async getParcelDetailsByFilterConditions(country: string, description: string): Promise<ParcelDetails[]> {
        const query = this.createFilterQuery(country, description);

        return query
            .orderBy("parcel_details.deliveryDate", "ASC")
            .getMany();
    }

    private createFilterQuery(country: string, description: string) {
        const query = this.parcelDetailsRepository
            .createQueryBuilder("parcel_details");

        if (country && description) {
            return query.where("parcel_details.country ilike :country", {country: `%${country}%`})
                .andWhere("parcel_details.description ilike :description", {description: `%${description}%`});
        }

        if (country) {
            return query.where("parcel_details.country ilike :country", {country: `%${country}%`});
        }

        if (description) {
            return query.where("parcel_details.description ilike :description", {description: `%${description}%`})
        }
        return query;
    }
}
