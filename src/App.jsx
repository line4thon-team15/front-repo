// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Routes from './router/Routes';
import { ScrollProvider } from './layouts/ScrollContext';
import { AuthProvider } from './contexts/AuthContext'; // AuthProvider import

function App() {
    return (
        <BrowserRouter>
            <AuthProvider> {/* AuthProvider로 전체 감싸기 */}
                <ScrollProvider>
                    <Wrapper>
                        <Routes />
                    </Wrapper>
                </ScrollProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
