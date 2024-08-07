import {
  AdvancedMarker,
  AdvancedMarkerRef,
  useAdvancedMarkerRef,
  useMap,
} from "@vis.gl/react-google-maps";
import { LocationMarker } from "../../../../domain";
import {
  getSelectedLocation,
  setSelectedLocation,
  setLocationsActive,
  useAppDispatch,
  useAppSelector,
} from "../../../store";
import { ZippinPin } from "../";

interface Props {
  location: LocationMarker;
  infoWinRef: (m: AdvancedMarkerRef | null) => void;
}

export const ZippinMarker = ({ location, infoWinRef }: Props) => {
  const map = useMap();
  const dispatch = useAppDispatch();
  const selectedLocation = useAppSelector((state) =>
    getSelectedLocation(state),
  );

  const [markerRef] = useAdvancedMarkerRef();

  const handleMarkerClick = () => {
    dispatch(setSelectedLocation(location));
  };

  if (map) {
    google.maps.event.addListener(map, "click", function () {
      dispatch(setSelectedLocation(null));
      dispatch(setLocationsActive({ driverId: null }));
    });
  }

  return (
    <AdvancedMarker
      ref={location.id === selectedLocation?.id ? infoWinRef : markerRef}
      position={location.position}
      onClick={handleMarkerClick}
    >
      <ZippinPin
        location={location}
        isSelected={location.id === selectedLocation?.id}
      />
    </AdvancedMarker>
  );
};
