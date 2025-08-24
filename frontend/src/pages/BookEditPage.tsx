import Box from '@mui/material/Box';
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";

import axios from "axios";
import type { BookWithId} from "../types/bookType.ts";
import {routerConfig} from "./routerConfig.ts";
import {useNavigate, useParams} from "react-router-dom";
import {TitleActionBar} from "../components/TitleActionBar.tsx";
import Container from "@mui/material/Container";
import {BooksButtonCancel} from "../components/books/BooksButtonCancel.tsx";


export function BookEditPage() {
    const {id} = useParams();
    const navigate = useNavigate()

    const [book, setBook] = useState<BookWithId>({
        id:"",
        title:"",
        description : "",
        authors : [""],
        firstPublishDate : "",
        cover : "",
        language : "",
        isbn : ""
    });

    async function getBookDataById(id:string){
        try{
            const response = await axios.get(routerConfig.API.BOOK_ID(id));
            if(response.status === 200){
                setBook(response.data);
            }
        }catch(error){
            console.log(error);
        }
    }

    function setBookValue(e:ChangeEvent<HTMLInputElement>){
        setBook(prev => ({
            ...prev,
            [e.target.name]: (e.target.name=="authors"?e.target.value.split(","):e.target.value)
        }));
    }

    async function sendForm(e:FormEvent<HTMLFormElement> ){
        if(!id) return
        e.preventDefault();
       await axios.put(routerConfig.API.BOOKS, book);
       navigate(routerConfig.URL.BOOK_ID(id));
    }

    useEffect(() => {
        if(!id) return
        getBookDataById(id)
    }, [id]);



    return (
        <Container>
            <TitleActionBar title={`Edit ${ book.title || "Book"}`}>
                <div></div>
            </TitleActionBar>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={sendForm}
            >
                <input type={"hidden"} name={"id"} value={book.id} />
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
                    value={Array.isArray(book.authors) ? book.authors.join(", ") : book.authors}
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
                <BooksButtonCancel />
                <Button type={"submit"} variant={"contained"}>Save</Button>
            </Box>
        </Container>
    );

}