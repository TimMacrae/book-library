import './App.css'
import {Router} from "./pages/Router"
import {Navbar} from "./components/Navbar.tsx";
import {routerConfig} from "./pages/routerConfig.ts";
import axios from "axios";
import {useEffect} from "react";

function App() {

    function login() {
        const host = window.location.host === routerConfig.API.HOST5173 ? routerConfig.API.HOST8080: window.location.origin

        window.open(host + routerConfig.API.GITHUB_AUTH, '_self')
    }

    function loadingUser (){
        axios.get(routerConfig.API.AUTH_USER)
        .then((response) => {
            console.log(response)
        })
    }

    useEffect(() => {
        loadingUser();
    },[])

    return (
        <>
            <header>
              <Navbar /> <button onClick={login}>Login</button>
            </header>
            <Router/>
            <footer></footer>
        </>
    )
}

export default App
