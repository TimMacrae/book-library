import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { BookWithId } from "../types/bookType.ts";
import { Typography } from "@mui/material";
import axios from "axios";
import {routerConfig} from "./routerConfig.ts";
import {LoadingSpinner} from "../components/LoadingSpinner.tsx";
import {BookDetailCard} from "../components/books/BookDetailCard.tsx";
import Container from "@mui/material/Container";
import {TitleActionBar} from "../components/TitleActionBar.tsx";
import BooksButtonDelete from "../components/books/BooksButtonDelete.tsx";
import {BooksButtonEdit} from "../components/books/BooksButtonEdit.tsx";

export function BookDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<BookWithId | null>(null);
    const [loading, setLoading] = useState(true);

    const getBookDetails = async () => {
        if (!id) return
        setLoading(true);
        try {
            const response = await axios.get<BookWithId>(routerConfig.API.BOOK_ID(id));
            if (response.status === 200) {
                setBook(response.data);
            }
            setLoading(false);
        }catch  {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (!id) return;
        getBookDetails()
    }, [id]);

    if (loading) return <LoadingSpinner/>;
    if (!book) return <Typography>Book not found!</Typography>;

    return (
        <Container>
            <TitleActionBar title={book.title || "Book"}>
               <div style={{ display: "flex", gap: 4}}>
                   <BooksButtonDelete book={book} />
                   <BooksButtonEdit book={book}  />
               </div>
            </TitleActionBar>
            <BookDetailCard book={book} />
        </Container>

    );
}
