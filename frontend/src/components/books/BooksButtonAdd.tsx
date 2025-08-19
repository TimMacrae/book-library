import {Box, Button, Chip, Modal, Stack, TextField} from "@mui/material";
import {type ChangeEvent, type FormEvent, useState} from "react";
import type {Book, BookForm} from "../../types/bookType.ts";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    '& .MuiTextField-root': { my: 1,  }
};


const defaultBookForm:BookForm = {
    title: "",
    description: "",
    authors: [] as string[],
    authorInput: "",
    firstPublishDate: "",
    cover: "",
    language: "",
    isbn: ""
}

export function BooksButtonAdd() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<BookForm>(defaultBookForm);

     async function postBook(book:Book) {
        try {
            const response = await axios.post("/api/books", book);
            return response.data;
        } catch (error) {
            console.error("Error posting book:", error);
            throw error;
        }
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleAddAuthor = () => {
        if (form.authorInput.trim()) {
            setForm(prev => ({
                ...prev,
                authors: [...prev.authors, prev.authorInput.trim()],
                authorInput: ""
            }));
        }
    };

    const handleDeleteAuthor = (author: string) => {
        setForm(prev => ({
            ...prev,
            authors: prev.authors.filter(a => a !== author)
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { authorInput, ...submitForm } = form;
        postBook(submitForm);
        setOpen(false);
        setForm(defaultBookForm);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleOpen}>Add Book</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box component="form" onSubmit={handleSubmit} sx={style}>
                    <TextField
                        label="Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        multiline
                        required
                        fullWidth
                    />
                    <Stack direction="row" spacing={1} alignItems="center">
                        <TextField
                            label="Add Author"
                            name="authorInput"
                            value={form.authorInput}
                            onChange={handleChange}
                            required
                            onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); handleAddAuthor(); } }}
                        />
                        <Button variant="contained" onClick={handleAddAuthor}>Add</Button>
                    </Stack>
                    <Stack direction="row" spacing={1} style={{marginBottom: 16}}>
                        {form.authors.map(author => (
                            <Chip key={author} label={author} onDelete={() => handleDeleteAuthor(author)} />
                        ))}
                    </Stack>
                    <TextField
                        label="First Publish Date"
                        type="date"
                        name="firstPublishDate"
                        value={form.firstPublishDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Cover URL"
                        name="cover"
                        value={form.cover}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Language"
                        name="language"
                        value={form.language}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="ISBN"
                        name="isbn"
                        value={form.isbn}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <Button type="submit" variant="contained">Save Book</Button>
                </Box>
            </Modal>
        </>
    );
}