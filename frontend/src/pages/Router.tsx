import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BookDetailPage } from "./BookDetailPage.tsx";
import {routerConfig} from "./routerConfig.ts";
import {BookEditPage} from "./BookEditPage.tsx";
import {BookFavoritesOverview} from "./BookFavoritesOverview.tsx";

export function Router() {
    return (
        <Routes>
            <Route path={routerConfig.URL.HOME} element={<HomePage />} />
            <Route path={routerConfig.URL.BOOKEDIT} element={<BookEditPage />} />
            <Route path={`${routerConfig.URL.BOOKS}/:id`} element={<BookDetailPage />} />
            <Route path={routerConfig.URL.FAVORITES} element={<BookFavoritesOverview />} />
        </Routes>
    );
}