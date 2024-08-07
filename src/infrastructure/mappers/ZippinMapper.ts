import { Driver, LocationMarker } from '../../domain/entities';
import { ZippinDriverResponse } from '../interfaces/zippinApiDriver.interface';
import { ZippinLocationResponse } from '../interfaces/zippinApiLocation.interface';

export class ZippinMapper {
    static async zippinApiLocationToEntity(data: ZippinLocationResponse): Promise<LocationMarker> {
        return {
            id: data.id,
            name: data.name,
            position: {
                lat: data.position.lat,
                lng: data.position.lng
            },
            isActive: false,
            driverIdAssigned: 0
        };
    }
    static async zippinApiDriverToEntity(data: ZippinDriverResponse): Promise<Driver> {
        return {
            id: data.id,
            name: data.name
        };
    }
}
