import { APIProvider, Map, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { ZippinInfoWindow, ZippinMarker } from './';
import { useAppSelector } from '../../store';
import { selectAllLocations } from '../../store/location/location';

const mapCenter = {
    lat: -34.603722,
    lng: -58.381592
};

const mapProps = {
    defaultCenter: mapCenter,
    defaultZoom: 13,
    mapId: import.meta.env.VITE_GOOGLE_MAPS_ID,
    disableDefaultUI: true,
    style: { height: 700 }
};

export const ZippinMap = () => {
    const locations = useAppSelector(selectAllLocations);
    const [markerRef, marker] = useAdvancedMarkerRef();

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map {...mapProps}>
                {locations.map((location) => (
                    <ZippinMarker key={location.name} location={location} infoWinRef={markerRef} />
                ))}
                <ZippinInfoWindow marker={marker} />
            </Map>
        </APIProvider>
    );
};
