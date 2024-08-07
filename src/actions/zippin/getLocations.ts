import { mockLocations } from "../../data";
import { LocationMarker } from "../../domain/entities";
import { ZippinMapper } from "../../infrastructure/mappers/ZippinMapper";

export const getLocations = async (): Promise<LocationMarker[]> => {
  try {
    // Acá peticion backend.

    const locations: Promise<LocationMarker>[] = mockLocations.map(
      ZippinMapper.zippinApiLocationToEntity,
    );

    return Promise.all(locations);
  } catch (error) {
    console.log(error);
    throw new Error("Error getting locations");
  }
};
