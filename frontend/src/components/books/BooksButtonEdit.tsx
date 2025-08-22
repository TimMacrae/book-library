import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import {useNavigate} from "react-router-dom";
import {routerConfig} from "../../pages/routerConfig.ts";


export function BooksButtonEdit(props){
    const navigate = useNavigate();
    function goToBook(){
        navigate(routerConfig.URL.BOOKEDIT)
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