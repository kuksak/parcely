import {Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";

@Entity()
@Unique('unique_parcel_sku', ['parcelSku'])
export class ParcelDetails {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    parcelSku: string

    @Column({nullable: true})
    description: string

    @Column()
    streetAddress: string

    @Column()
    town: string

    @Column()
    country: string

    @Column({type: 'date'})
    deliveryDate: string
}
