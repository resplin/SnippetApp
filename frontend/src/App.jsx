import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import SnippetEditor from './pages/SnippetEditor';
import TagManager from "./pages/TagManager";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const [snippets, setSnippets] = useState([]);

    const loadSnippets = async () => {
        try {
            const response = await axios.get('http://localhost:5000/snippet/');
            setSnippets(response.data);
        } catch (error) {
            console.error('Error fetching Snippets:', error);
        }
    }

    const loadAll = async () => {
        await loadSnippets();
    }

    useEffect(() => {
        loadAll();
    }, []);

    return (
        <>
            <Routes>
                <Route index element={
                    <DashboardLayout snippets={snippets}>
                        <Home />
                    </DashboardLayout>
                } />
                <Route path="search" element={
                    <DashboardLayout snippets={snippets}>
                        <SearchPage />
                    </DashboardLayout>
                } />
                <Route path="snippet-editor" element={
                    <DashboardLayout snippets={snippets}>
                        <SnippetEditor />
                    </DashboardLayout>
                } />
                <Route path="tag-manager" element={
                    <DashboardLayout snippets={snippets}>
                        <TagManager />
                    </DashboardLayout>
                } />
            </Routes>
        </>
    )
}

export default App
