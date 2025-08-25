import {Box} from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

type BookImageProps = {
    cover_uri: string,
    title: string
}

export function BookImage({cover_uri, title}: BookImageProps) {
    if (cover_uri !== "") {
        return (<Box
            component="img"
            src={cover_uri}
            alt={title}
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