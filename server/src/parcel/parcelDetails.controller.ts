import {Body, Controller, Get, Injectable, Post, Query} from "@nestjs/common";
import {ParcelDetailsService} from "./parcelDetails.service";
import {ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ParcelDetails} from "./parcelDetails.entity";

@ApiTags('Parcel Details')
@Controller('v1/parcel-details')
export class ParcelDetailsController {

    constructor(
        private readonly parcelDetailsService: ParcelDetailsService
    ) {
    }

    @Post()
    @ApiOperation({summary: 'Create parcel details'})
    @ApiResponse({status: 200, description: 'Saved parcel details'})
    createParcelDetails(@Body() parcelDetails: ParcelDetails) {
        return this.parcelDetailsService.createParcelDetails(parcelDetails);
    }

    @Get()
    @ApiOperation({summary: 'Get parcel details'})
    @ApiResponse({status: 200, description: 'Get parcel details'})
    @ApiQuery({ name: 'country', required: false })
    @ApiQuery({ name: 'description', required: false })
    getParcelDetails(
        @Query('country') country?: string,
        @Query('description') description?: string
    ) {
        if (country || description) {
            return this.parcelDetailsService.getParcelDetailsByFilterConditions(country, description);
        }
        return this.parcelDetailsService.getParcelDetails()
    }

}
