import {useEffect, useState} from "react";
import axios from "axios";
import {routerConfig} from "./routerConfig.ts";
import Container from "@mui/material/Container";
import {TitleActionBar} from "../components/TitleActionBar.tsx";
import {BooksSnackbar} from "../components/BooksSnackbar.tsx";
import type {LibraryWork} from "../types/libraryType.ts";
import {LibraryWorksGallery} from "../components/library/LibraryWorksGallery.tsx";



export default function Library() {
    const [libraryWorkList, setLibraryWorkList] = useState<LibraryWork[]>([])
//    const [query, setQuery] = useState<string>("")
    const [loading, setLoading] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState("")

    useEffect(() => {
        setLoading(true)
            axios.get(routerConfig.API.LIBRARY)
                .then(result => {
                        setLoading(false)
                        setLibraryWorkList(result.data)
                }
                )
                .catch ((error: unknown)=> {
                    setLoading(false)
                    if (error instanceof Error) {
                        setSnackbarMessage(error.message);
                    } else {
                        setSnackbarMessage(String(error));
                    }
                })
    }, [])


    return (
        <Container >
            <TitleActionBar title="OpenLibrary Search and Collect">
                <BooksSnackbar message={snackbarMessage} open={snackbarOpen} setOpen={setSnackbarOpen}/>
            </TitleActionBar>
            <LibraryWorksGallery libraryWorkList={libraryWorkList} loading={loading}/>
        </Container>
    );

}