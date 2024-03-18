import {Module} from '@nestjs/common';

import {TypeOrmModule} from '@nestjs/typeorm';
import {ParcelDetails} from "./parcel/parcelDetails.entity";
import {ParcelDetailsController} from "./parcel/parcelDetails.controller";
import {ParcelDetailsService} from "./parcel/parcelDetails.service";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'testuser',
            password: 'password!123',
            database: 'parcely',
            entities: [ParcelDetails],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([ParcelDetails]),
    ],
    controllers: [ParcelDetailsController],
    providers: [ParcelDetailsService],
})
export class AppModule {
}
