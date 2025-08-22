import {BooksGallery} from "../components/books/BooksGallery.tsx";
import Container from "@mui/material/Container";
import {TitleActionBar} from "../components/TitleActionBar.tsx";
import {BooksButtonAdd} from "../components/books/BooksButtonAdd.tsx";
import {useEffect, useState} from "react";
import type {BookWithId} from "../types/bookType.ts";
import {routerConfig} from "./routerConfig.ts";
import axios from "axios";

export function HomePage() {
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



    return (
        <Container>
            <TitleActionBar title="My Books">
                <BooksButtonAdd getBooks={getBooks}/>
            </TitleActionBar>
            <BooksGallery books={books} loading={loading}/>
        </Container>
    );
}
