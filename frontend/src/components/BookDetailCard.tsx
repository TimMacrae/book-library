import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Book } from "../types/Book";
import { exampleBooks } from "./exampleBooks.ts";

export function BookDetailCard() {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const foundBook = exampleBooks.find((b) => b.id === id) || null;
        setBook(foundBook);
        setLoading(false);
    }, [id]);

    if (loading) return <p>Lade Buchdaten...</p>;
    if (!book) return <p>Buch nicht gefunden!</p>;

    return (
        <div
            style={{
                maxWidth: 800,
                margin: "20px auto",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{book.title}</h2>

            {book.cover && (
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <img
                        src={book.cover}
                        alt={book.title}
                        style={{ width: 200, borderRadius: "4px" }}
                    />
                </div>
            )}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    rowGap: "10px",
                    columnGap: "20px",
                    textAlign: "left",
                    alignItems: "start",
                }}
            >
                <span><strong>ID:</strong></span>
                <span>{book.id}</span>

                <span><strong>Titel:</strong></span>
                <span>{book.title}</span>

                <span><strong>Beschreibung:</strong></span>
                <span>{book.description}</span>

                <span><strong>Autor(en):</strong></span>
                <span>{book.authors.join(", ")}</span>

                <span><strong>Erstveröffentlichung:</strong></span>
                <span>{book.firstPublishDate}</span>

                <span><strong>Sprache:</strong></span>
                <span>{book.language}</span>

                <span><strong>ISBN:</strong></span>
                <span>{book.isbn}</span>
            </div>
        </div>
    );
}
