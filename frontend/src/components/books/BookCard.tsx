import {useNavigate} from "react-router-dom";
import {Box, Card, CardContent, Typography} from "@mui/material";
import {routerConfig} from "../../pages/routerConfig.ts";
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import type {Book} from "../../types/bookTypes.ts";

type BookCardProps = {
    book: Book;
};

export function BookCard({book}: Readonly<BookCardProps>) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${routerConfig.URL.BOOKS}/${book.id}`);
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
                "&:hover": {transform: "scale(1.02)", boxShadow: 6},
            }}
            style={{minWidth: 300}}
            onClick={handleClick}
        >
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
