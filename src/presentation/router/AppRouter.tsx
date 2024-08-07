import { Navigate, Route, Routes } from 'react-router-dom';
import { MapPage } from '../pages';
import { MainLayout } from '../layouts';

export const AppRouter = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<MapPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </MainLayout>
    );
};
