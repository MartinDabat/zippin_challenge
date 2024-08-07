import { PropsWithChildren, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, setDrivers, locationsReceived } from './';
import { getLocations, getDrivers } from '../../actions';

export const ChallengeAppProvider = ({ children }: PropsWithChildren) => {
    const init = async () => {
        store.dispatch(locationsReceived(await getLocations()));
        store.dispatch(setDrivers(await getDrivers()));
    };

    useEffect(() => {
        init();
    }, []);

    return <Provider store={store}>{children}</Provider>;
};
