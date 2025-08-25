import { Card, CardContent, Typography} from "@mui/material";
import type {LibraryWork} from "../../types/libraryType.ts";
import { LibraryWorkImage } from "./LibraryWorkImage.tsx";

type LibraryWorkCardProps = {
    libraryWork: LibraryWork;
};

export function LibraryWorkCard({libraryWork}: Readonly<LibraryWorkCardProps>) {

    return (
        <Card
            sx={{
                maxWidth: 300,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {transform: "scale(1.02)", boxShadow: 6},
            }}
            style={{minWidth: 300}}
        >
            <LibraryWorkImage libraryWork={libraryWork} />

            <CardContent sx={{flexGrow: 1}}>
                <Typography
                    variant="h6"
                    gutterBottom
                    noWrap
                    title={libraryWork.title}
                >
                    {libraryWork.title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{fontStyle: "italic", mb: 1}}
                >
                    {libraryWork.author_name.join(", ")}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    published : {libraryWork.first_publish_year}
                </Typography>
            </CardContent>
        </Card>
    );
}
