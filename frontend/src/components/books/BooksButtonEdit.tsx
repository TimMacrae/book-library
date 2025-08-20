import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import {useNavigate} from "react-router-dom";


export function BooksButtonEdit(props:string){
    const navigate = useNavigate();
    function goToBook(){
        navigate(`/book/${props.id}/edit`)
    }
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" endIcon={<EditIcon />} onClick={goToBook}>
                    Edit book
                </Button>
            </Stack>
        </>
    );
}