import { Pin } from '@vis.gl/react-google-maps';
import { idIntoColor } from '../../../../util';
import { LocationMarker } from '../../../../domain';

interface Props {
    location: LocationMarker;
    isSelected: boolean;
}

export const ZippinPin = ({ location, isSelected }: Props) => {
    return (
        <Pin
            background={
                location.driverIdAssigned !== 0 ? idIntoColor(location.driverIdAssigned) : '#dddddd'
            }
            glyphColor={'#000'}
            scale={isSelected || location.isActive ? 1.1 : 1}
            borderColor={isSelected || location.isActive ? '#000' : 'transparent'}
        />
    );
};
