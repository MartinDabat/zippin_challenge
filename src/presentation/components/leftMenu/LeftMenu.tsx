import { Box, Drawer, List, Toolbar } from '@mui/material';
import {
    useAppDispatch,
    useAppSelector,
    selectAllLocations,
    setLocationActive,
    setLocationsActive
} from '../../store/';
import { LeftMenuItem } from '../';

const DRAWER_WIDTH = 260;

export const LeftMenu = () => {
    const dispatch = useAppDispatch();
    const locations = useAppSelector(selectAllLocations);
    const drivers = useAppSelector((state) => state.map.drivers);

    const activeDriverLocations = (driverId: number) => {
        dispatch(setLocationsActive({ driverId }));
    };

    const activeLocation = (locationId: number) => {
        dispatch(setLocationActive({ locationId }));
    };

    return (
        <Drawer
            sx={{
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box'
                },
                width: DRAWER_WIDTH,
                flexShrink: 0
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Box>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                >
                    <LeftMenuItem
                        title="Drivers"
                        items={drivers}
                        setActive={activeDriverLocations}
                    />
                    <LeftMenuItem title="Locations" items={locations} setActive={activeLocation} />
                </List>
            </Box>
        </Drawer>
    );
};
