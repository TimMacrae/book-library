import {useEffect, useState} from "react";
import {BookCard} from "./BookCard.tsx";
import {Box, Grid} from "@mui/material";
import {LoadingSpinner} from "../LoadingSpinner.tsx";
import  axios from "axios";
import {routerConfig} from "../../pages/routerConfig.ts";
import type {Book} from "../../types/bookTypes.ts";

export function BooksGallery() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    const getBooks = async () => {
        setLoading(true);
        try{
            const response = await axios.get<Book[]>(routerConfig.API.BOOKS)
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
    );
}
