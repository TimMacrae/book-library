import FavoriteIcon from '@mui/icons-material/Favorite';
import {Button} from "@mui/material";

export function BooksButtonFavorite(props:Readonly<any>) {

    function favoriteBook(){

    }
    return (
        <>
            <Button  variant="outlined"  onClick={favoriteBook}>
                <FavoriteIcon />
            </Button>
        </>
    )
}