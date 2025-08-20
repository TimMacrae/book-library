import {Routes, Route} from "react-router-dom"
import {routerConfig} from "./routerConfig.ts";
import {HomePage} from "./HomePage.tsx";
import {BookEdit} from "./BookEdit.tsx";
import type {Book} from "../types/bookType.ts";



export function Router() {
    return (
        <Routes>
            <Route path={routerConfig.URL.HOME} element={<HomePage />} />
            <Route path={routerConfig.URL.BOOKEDIT} element={<BookEdit />} />
        </Routes>
    )
}