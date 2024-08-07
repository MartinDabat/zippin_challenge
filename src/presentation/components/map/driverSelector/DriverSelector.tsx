import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
  locationUpdated,
  selectLocationById,
} from "../../../store";

interface Props {
  locationId: number;
}

export const DriverSelector = ({ locationId }: Props) => {
  const dispatch = useAppDispatch();
  const drivers = useAppSelector((state) => state.map.drivers);
  const location = useAppSelector((state) =>
    selectLocationById(state, locationId),
  );

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(
      locationUpdated({
        id: locationId,
        changes: { driverIdAssigned: Number(event.target.value) },
      }),
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 220 }}>
      <Select
        value={location.driverIdAssigned.toString()}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        name={"driverSelect"}
      >
        <MenuItem value={"0"}>
          <em>None</em>
        </MenuItem>
        {drivers.map((driver) => (
          <MenuItem key={driver.id} value={driver.id.toString()}>
            {driver.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
