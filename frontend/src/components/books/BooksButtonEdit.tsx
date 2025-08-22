import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import {useNavigate} from "react-router-dom";
import {routerConfig} from "../../pages/routerConfig.ts";
import type {BookWithId} from "../../types/bookType.ts";


type BooksButtonEditProps = {
    book: BookWithId;
}

export function BooksButtonEdit({book}: BooksButtonEditProps) {
    const navigate = useNavigate();
    function goToBook(){
        console.log("EDIT BT:",book.id);
        navigate(routerConfig.URL.BOOK_EDIT_ID(book.id));
    }
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={goToBook} > <EditIcon /></Button>
            </Stack>
        </>
    );
}