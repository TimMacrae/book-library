import {BookCard} from "./BookCard.tsx";
import {Box, Grid} from "@mui/material";
import {LoadingSpinner} from "../LoadingSpinner.tsx";
import type {BookWithId} from "../../types/bookType.ts";

type BooksGalleryProps = {
    books: BookWithId[];
    loading: boolean;
}

export function BooksGallery({books,loading}: BooksGalleryProps) {

    if (loading) return <LoadingSpinner/>;
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>

                {books.map((book) => (
                    <Grid
                        key={book.id}
                        size={{ xs: 12,sm:6,  md: 3 }}
                    >
                        <BookCard key={book.id} book={book}/>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}
