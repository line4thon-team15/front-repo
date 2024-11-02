// src/App.js
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Routes from './router/Routes';
import { ScrollProvider } from './layouts/ScrollContext';

function App() {
    return (
        <BrowserRouter>
            <ScrollProvider>
                <Wrapper>
                    <Routes />
                </Wrapper>
            </ScrollProvider>
        </BrowserRouter>
    );
}

export default App;
