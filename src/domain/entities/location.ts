export interface LocationMarker {
    id: number;
    name: string;
    position: {
        lat: number;
        lng: number;
    };
    driverIdAssigned: number;
    isActive: boolean;
}
