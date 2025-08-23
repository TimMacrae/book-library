import {Button} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {routerConfig} from "../../pages/routerConfig.ts";

export function BooksButtonCancel() {    const {id} = useParams();
    const navigate = useNavigate()

    function returnToDetail(){
        navigate(routerConfig.URL.BOOKS+"/"+id);
    }
    return (
        <>
            <Button  variant="outlined" onClick={returnToDetail}>Back to Detail</Button>
        </>
    )
}