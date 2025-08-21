import './App.css'
import {Router} from "./pages/Router"
import {Navbar} from "./components/Navbar.tsx";

function App() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <Router/>
            <footer></footer>
        </>
    )
}

export default App
