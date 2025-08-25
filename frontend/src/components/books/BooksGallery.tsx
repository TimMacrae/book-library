import {BookCard} from "./BookCard.tsx";
import Box from '@mui/material/Box';
import {LoadingSpinner} from "../LoadingSpinner.tsx";
import type {BookWithId} from "../../types/bookType.ts";
import Grid from '@mui/material/Grid';

type BooksGalleryProps = {
    books: BookWithId[];
    loading: boolean;
}

export function BooksGallery({books,loading}: BooksGalleryProps) {

    if (loading) return <LoadingSpinner/>;
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} >

                {books.map((book) => (
                    <Grid
                        size={{xs:12,sm:6,md:3}}
                        key={book.id}
                    >
                        <BookCard book={book}/>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}
