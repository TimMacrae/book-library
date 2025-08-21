import {Box, Card, CardContent, Typography} from "@mui/material";
import type {Book} from "../../types/Book.ts";

type BookCardProps = {
    book: Book;
}

export function BookDetailCard({book}:BookCardProps) {
    return (
        <Card sx={{ maxWidth: 700, margin: "auto", mt: 4, p: 2, borderRadius: 3 }}>
    {book.cover && (
        <Box
            component="img"
            src={book.cover}
            alt={book.title}
            sx={{ width: "100%", height: 300, objectFit: "cover", mb: 1, borderRadius: 4 }}
        />
    )}

    <CardContent sx={{ pt: 1 }}>
        {/* Titel */}
        <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ mb: 1 }}
        >
            {book.title}
        </Typography>

        <Box
            sx={{
                width: "100%",
                height: "2px",
                bgcolor: "black",
                mb: 2
            }}
        />

        {book.description && (
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mb: 3 }}
            >
                {book.description}
            </Typography>
        )}

        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                rowGap: 1.5,
                columnGap: 2,
                textAlign: "left",
            }}
        >
            <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Autor(en):
            </Typography>
            <Typography variant="body2">{book.authors.join(", ")}</Typography>

            <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Erstveröffentlichung:
            </Typography>
            <Typography variant="body2">{book.firstPublishDate}</Typography>

            <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Sprache:
            </Typography>
            <Typography variant="body2">{book.language}</Typography>

            <Typography variant="body2" color="text.secondary" fontWeight="bold">
                ISBN:
            </Typography>
            <Typography variant="body2">{book.isbn}</Typography>
        </Box>
    </CardContent>
</Card>
    )
}