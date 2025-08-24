import {useEffect, useState} from "react";
import {BookCard} from "../components/books/BookCard.tsx";
import {Box, Grid} from "@mui/material";
import {LoadingSpinner} from "../components/LoadingSpinner.tsx";
import  axios from "axios";
import {routerConfig} from "./routerConfig.ts";
import type {BookWithId} from "../types/bookType.ts";
import {BooksButtonAdd} from "../components/books/BooksButtonAdd.tsx";

export function BookFavoritesOverview() {
    const [books, setBooks] = useState<BookWithId[]>([]);
    const [loading, setLoading] = useState(true);

    const getBooks = async () => {
        setLoading(true);
        try{
            const response = await axios.get<BookWithId[]>(routerConfig.API.BOOKS)
            if(response.status === 200){
                setBooks(response.data);
            }
            setLoading(false);
        } catch {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBooks();
    }, []);

    if (loading) return <LoadingSpinner/>;

    return (
        <>
            <BooksButtonAdd />
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>

                    {books.map((book) => (
                        <Grid
                            size={{ xs: 12,sm:6,  md: 3 }}
                        >
                            <BookCard key={book.id} book={book}/>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </>
    );
}
