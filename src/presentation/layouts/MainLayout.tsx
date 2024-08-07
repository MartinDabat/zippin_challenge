import { PropsWithChildren } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Header } from '../components';

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <Box sx={{ marginTop: 5, width: 1 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};
