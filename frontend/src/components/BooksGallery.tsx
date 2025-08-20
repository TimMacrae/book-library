import { useEffect, useState } from "react";
import type {Book} from "../types/Book";
import { exampleBooks } from "./exampleBooks";
import BookCard from "./BookCard";

export function BooksGallery() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setBooks(exampleBooks);
        setLoading(false);
    }, []);

    if (loading) return <p>Lade Bücher...</p>;

    return (
        <div style={{ maxWidth: 1200, margin: "40px auto", padding: "0 15px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2rem", color: "#333" }}>
                Alle Bücher
            </h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                }}
            >
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}
