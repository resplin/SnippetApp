import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Home from './pages/Home.jsx';

function App() {
    const loadAll = async () => {
    }

    useEffect(() => {
        loadAll();
    }, []);

    return (
        <>
            <Routes>
                <Route index element={
                    <DashboardLayout>
                        <Home />
                    </DashboardLayout>
                } />
            </Routes>
        </>
    )
}

export default App
