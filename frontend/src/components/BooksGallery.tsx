import { useEffect, useState } from "react";
import type { Book } from "../types/Book";
import { exampleBooks } from "./exampleBooks";
import BookCard from "./BookCard";
import { Box, Typography } from "@mui/material";

export function BooksGallery() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setBooks(exampleBooks);
        setLoading(false);
    }, []);

    if (loading) return <Typography>Lade Bücher...</Typography>;

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
               - Übersicht -
                <p></p>
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 2,
                }}
            >
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </Box>
        </Box>
    );
}
