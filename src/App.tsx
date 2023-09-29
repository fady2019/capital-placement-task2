import Sidebar from './components/layout/sidebar/sidebar.component';
import Home from './components/home/home.component';

import './App.css';

function App() {
    return (
        <>
            <Sidebar />

            <main className="app-main">
                <Home />
            </main>
        </>
    );
}

export default App;
