import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BookDetailCard } from "../components/BookDetailCard.tsx";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:id" element={<BookDetailCard />} />
        </Routes>
    );
}