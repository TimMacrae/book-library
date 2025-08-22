import {Box, Card, CardContent, Typography} from "@mui/material";
import type {BookWithId} from "../../types/bookType.ts";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";


type BookCardProps = {
    book: BookWithId;
}

export function BookDetailCard({book}:BookCardProps) {
    return (
        <Card sx={{ maxWidth: 300, margin: "auto", mt: 4, borderRadius: 3 }}>
            {book.cover ? (
                    <Box
                        component="img"
                        src={book.cover}
                        alt={book.title}
                        sx={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover",
                            minWidth: 400,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                        }}
                    />
                ) :
                (<Box
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
                </Box>)
            }

    <CardContent sx={{ pt: 1 }}>
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
                gridTemplateColumns: "70px 1fr",
                rowGap: 1.5,
                columnGap: 2,
                textAlign: "left",
            }}
        >
            <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Author(s):
            </Typography>
            <Typography variant="body2">{book.authors.join(", ")}</Typography>

            <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Published:
            </Typography>
            <Typography variant="body2">{book.firstPublishDate}</Typography>

            <Typography variant="body2" color="text.secondary" fontWeight="bold">
                Language:
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