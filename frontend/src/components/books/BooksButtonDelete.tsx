import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useState} from "react";
import type {Book} from "../../types/bookTypes.ts";
import axios from 'axios';
import {routerConfig} from "../../pages/routerConfig.ts";

type BooksButtonDeleteProps = {
    book: Book
}

export default function BooksButtonDelete (props: BooksButtonDeleteProps) {
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose () {
        setOpen(false);
    }

    function handleDelete(id: string) {
        axios.delete(routerConfig.API.BOOKS + "/" + id)
            .then(() => {
                console.log("Buch erfolgreich gelöscht")
                handleClose()
            })
            .catch((error) => {
                    console.log(error) // errorhandling hinzufügen
                    handleClose()

                }
            )
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>Delete</Button>
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