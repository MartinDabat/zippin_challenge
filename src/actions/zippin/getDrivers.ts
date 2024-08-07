import { mockDrivers } from '../../data';
import { Driver } from '../../domain/entities';
import { ZippinMapper } from '../../infrastructure/mappers/ZippinMapper';

export const getDrivers = async (): Promise<Driver[]> => {
    try {
        // Acá peticion backend.

        const drivers: Promise<Driver>[] = mockDrivers.map(ZippinMapper.zippinApiDriverToEntity);

        return Promise.all(drivers);
    } catch (error) {
        console.log(error);
        throw new Error('Error getting drivers');
    }
};
