import type { Book } from "../types/Book";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@mui/material";

type BookCardProps = {
    book: Book;
};

export default function BookCard({ book }: Readonly<BookCardProps>) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/books/${book.id}`);
    };

    return (
        <Card
            sx={{
                maxWidth: 300,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
            }}
            onClick={handleClick}
        >
            {book.cover && (
                <Box
                    component="img"
                    src={book.cover}
                    alt={book.title}
                    sx={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                        borderTopLeftRadius: 1,
                        borderTopRightRadius: 1,
                    }}
                />
            )}

            <CardContent sx={{ flexGrow: 1 }}>
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
                    sx={{ fontStyle: "italic", mb: 1 }}
                >
                    {book.authors.join(", ")}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Veröffentlicht am: {book.firstPublishDate}
                </Typography>
            </CardContent>
        </Card>
    );
}
