import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useState} from "react";
import type {BookWithId} from "../../types/bookType.ts";
import axios from 'axios';
import {routerConfig} from "../../pages/routerConfig.ts";
import {BooksSnackbar} from "../BooksSnackbar.tsx";

type BooksButtonDeleteProps = {
    book: BookWithId
}

export default function BooksButtonDelete (props: BooksButtonDeleteProps) {
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState("")

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose () {
        setOpen(false);
    }

    async function handleDelete(id: string) {
        try {
            await axios.delete(`${routerConfig.API.BOOKS}/${id}`);
            setSnackbarMessage("Book successfully deleted");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setSnackbarMessage(error.message);
            } else {
                setSnackbarMessage(String(error));
            }
        } finally {
            handleClose();
            setSnackbarOpen(true);
        }
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>Delete</Button>
            <BooksSnackbar open={snackbarOpen} setOpen={setSnackbarOpen} message={snackbarMessage}/>
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>
                    Delete of "{props.book.title}"
                </DialogTitle>
                <DialogContent>
                    Are you sure that you want to delete the Book with the Title "{props.book.title}" by "props.book.author?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose()} autoFocus>Cancel</Button>
                    <Button onClick={() => handleDelete(props.book.id)}>Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}