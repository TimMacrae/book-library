import {Box} from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import type {LibraryWork} from "../../types/libraryType.ts";

type LibraryWorkImageProps = {
    libraryWork: LibraryWork
}

export function LibraryWorkImage({libraryWork}: LibraryWorkImageProps) {
    if (libraryWork.cover_i) {
        const cover_uri = "https://covers.openlibrary.org/b/id/" + libraryWork.cover_i + "-L.jpg"
        return (<Box
            component="img"
            src={cover_uri}
            alt={libraryWork.title}
            sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                minWidth: 400,
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