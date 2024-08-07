import { Typography } from '@mui/material';
import { InfoWindow, useMap } from '@vis.gl/react-google-maps';
import {
    useAppDispatch,
    useAppSelector,
    getSelectedLocation,
    setSelectedLocation
} from '../../../store';
import { DriverSelector } from '../';

interface Props {
    marker: google.maps.marker.AdvancedMarkerElement | null;
}

export const ZippinInfoWindow = ({ marker }: Props) => {
    const map = useMap();
    const dispatch = useAppDispatch();
    const activeLocation = useAppSelector((state) => getSelectedLocation(state));

    const closeInfoWindow = () => {
        dispatch(setSelectedLocation(null));
    };

    if (map) {
        google.maps.event.addListener(map, 'click', function () {
            closeInfoWindow();
        });
    }

    if (!activeLocation) {
        return;
    }

    return (
        <InfoWindow
            anchor={marker}
            onClose={() => closeInfoWindow()}
            headerContent={
                <Typography variant="h6" fontWeight={500} style={{ marginTop: -10 }}>
                    {activeLocation.name}
                </Typography>
            }
        >
            <DriverSelector locationId={activeLocation.id} />
        </InfoWindow>
    );
};
