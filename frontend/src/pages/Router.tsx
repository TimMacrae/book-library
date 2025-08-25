import {Routes, Route} from "react-router-dom";
import {HomePage} from "./HomePage";
import {BookDetailPage} from "./BookDetailPage.tsx";
import {routerConfig} from "./routerConfig.ts";
import {BookEditPage} from "./BookEditPage.tsx";
import {useEffect} from "react";
import axios from "axios";
import {ProtectedRoute} from "./ProtectedRoute.tsx";
import {LoginPage} from "./LoginPage.tsx";
import type {User} from "../types/userType.ts";

type RouterProps = {
    user: User;
    setUser: (user: User ) => void
}

export function Router({user, setUser}: RouterProps) {

    const getUser = async () => {
        try {
            const response = await axios.get(routerConfig.API.AUTH_USER)
            if (response.status === 200) {
                setUser(response.data)
            }

        } catch (error) {
            console.error("USER AUTHENTICATION:", error);
            setUser(null);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <Routes>
            <Route path={routerConfig.URL.LOGIN} element={<LoginPage/>}/>
            <Route element={<ProtectedRoute user={user}/>}>
                <Route path={routerConfig.URL.HOME} element={<HomePage/>}/>
                <Route path={routerConfig.URL.BOOKEDIT} element={<BookEditPage/>}/>
                <Route path={`${routerConfig.URL.BOOKS}/:id`} element={<BookDetailPage/>}/>
            </Route>
        </Routes>
    );
}