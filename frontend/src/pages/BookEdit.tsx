import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect} from "react";
import {Button} from "@mui/material";
import axios from "axios";
import type {Book, BookForm} from "../types/bookType.ts";
import {routerConfig} from "./routerConfig.ts";



export function BookEdit() {
    function getBookData(){
        // Mock bis get done
        return {
            id:"123",
            title:"The Lord of The Rings",
            description : "",
            authors : ["J.R.R. Tolkien"],
            firstPublishDate : "1954-07-29",
            cover : "sad",
            language : "de",
            isbn : "9780007123827"
        }
    }
    let bookData:Book = getBookData();

    const [book, setBook] = React.useState<Book>({
        id:"",
        title:"",
        description : "",
        authors : [""],
        firstPublishDate : "",
        cover : "",
        language : "",
        isbn : ""
    });
    function setBookValue(e){
        bookData[e.target.name] = e.target.value;
        setBook(bookData);
    }
    function sendForm(e){
        e.preventDefault();
        axios.put(routerConfig.API.BOOKS, bookData)
            .then();
    }

    useEffect(()=>{
        setBook(bookData);
    },[])

    return (
        <>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={sendForm}
            >
                <TextField
                    id="title"
                    name="title"
                    label="Book title"
                    variant="outlined"
                    value={book.title}
                    onChange={setBookValue}
                    fullWidth
                /><br />
                <TextField
                    id="description"
                    name="description"
                    label="Book description"
                    variant="outlined"
                    value={book.description}
                    onChange={setBookValue}
                    fullWidth
                /><br />
                <TextField
                    id="authors"
                    name="authors"
                    label="Authors"
                    variant="outlined"
                    value={book.authors.map((author)=>author+",")}
                    onChange={setBookValue}
                    helperText="Authors of the book, seperated by ','"
                    fullWidth
                /><br />
                <TextField
                    id="firstPublishDate"
                    name="firstPublishDate"
                    label="First published date"
                    variant="outlined"
                    value={book.firstPublishDate}
                    onChange={setBookValue}
                    fullWidth
                /><br />
                <TextField
                    id="cover"
                    name="cover"
                    label="Path to book cover"
                    variant="outlined"
                    value={book.cover}
                    onChange={setBookValue}
                    fullWidth
                /><br />
                <TextField
                    id="language"
                    name="language"
                    label="Book language"
                    variant="outlined"
                    value={book.language}
                    onChange={setBookValue}
                    helperText="2 letter ISO2 code"
                    fullWidth
                /><br />
                <TextField
                    id="isbn"
                    name="isbn"
                    label="ISBN"
                    variant="outlined"
                    value={book.isbn}
                    onChange={setBookValue}
                    fullWidth
                /><br/>
                <Button type={"submit"} variant={"contained"}>Save</Button>
            </Box>
        </>
    );

}