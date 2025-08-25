import {useNavigate} from "react-router-dom";
import { Card, CardContent, Typography} from "@mui/material";
import {routerConfig} from "../../pages/routerConfig.ts";
import type {BookWithId} from "../../types/bookType.ts";
import {BookImage} from "./BookImage.tsx";

type BookCardProps = {
    book: BookWithId;
};

export function BookCard({book}: Readonly<BookCardProps>) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(routerConfig.URL.BOOK_ID(book.id));
    };

    return (
        <Card
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {transform: "scale(1.02)", boxShadow: 6},
            }}
            onClick={handleClick}
        >
            <BookImage book={book} />

            <CardContent sx={{flexGrow: 1}}>
                <Typography
                    variant="h6"
                    gutterBottom
                    noWrap
                    title={book.title}
                >
                    {book.title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{fontStyle: "italic", mb: 1}}
                >
                    {book.authors.join(", ")}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    published : {book.firstPublishDate}
                </Typography>
            </CardContent>
        </Card>
    );
}
