import type {BookWithId} from "../../types/bookType.ts";
import {Box} from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

type BookImageProps = {
    book: BookWithId
}

export function BookImage({book}: BookImageProps) {
    if (book.cover) {
        return (<Box
            component="img"
            src={book.cover}
            alt={book.title}
            sx={{
                width: "100%",
                height: 200,
                objectFit: "contain",
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
            }}
        />)
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "grey.200",
                borderTopLeftRadius: 1,
                borderTopRightRadius: 1,
            }}
        >
            <BrokenImageIcon sx={{fontSize: 80, color: "grey.500"}}/>
        </Box>

    )
}