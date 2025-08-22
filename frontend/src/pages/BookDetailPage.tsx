import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { BookWithId } from "../types/bookType.ts";
import { Typography } from "@mui/material";
import axios from "axios";
import {routerConfig} from "./routerConfig.ts";
import {LoadingSpinner} from "../components/LoadingSpinner.tsx";
import {BookDetailCard} from "../components/books/BookDetailCard.tsx";

export function BookDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<BookWithId | null>(null);
    const [loading, setLoading] = useState(true);

    const getBookDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get<BookWithId>(`${routerConfig.API.BOOKS}/${id}`);
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
    if (!book) return <Typography>Buch nicht gefunden!</Typography>;

    return (
        <BookDetailCard book={book} />
    );
}
