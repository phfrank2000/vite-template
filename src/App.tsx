import { createTheme, MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage } from '@/pages/Homepage';
import React from 'react';
import '@mantine/core/styles.css';

const theme = createTheme({
    // Put your mantine theme override here
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
]);

const App: React.FC = () => {
    return (
        <MantineProvider theme={theme}>
            <RouterProvider router={router} />
        </MantineProvider>
    );
};

export default App;
