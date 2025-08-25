import './App.css'
import {Router} from "./pages/Router"
import {Navbar} from "./components/Navbar.tsx";
import {useState} from "react";
import type {User} from "./types/userType.ts";


function App() {
    const [user, setUser] = useState<User>(undefined);

    return (
        <>
            <header>
              <Navbar user={user} />
            </header>
            <Router user={user}  setUser={setUser} />
            <footer></footer>
        </>
    )
}

export default App
