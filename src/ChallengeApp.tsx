import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './presentation/router/AppRouter';
import { ChallengeAppProvider } from './presentation/store/ChallengeAppProvider';

const ChallengeApp = () => {
    return (
        <ChallengeAppProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </ChallengeAppProvider>
    );
};

export default ChallengeApp;
