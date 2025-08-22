import {Box, Snackbar} from "@mui/material";

type BooksSnackbarProps = {
    message: string
    open: boolean
    setOpen: (open: boolean) => void
}

export function BooksSnackbar(props: BooksSnackbarProps) {
    function handleClose() {
        props.setOpen(false)
    }
    return (
        <Box>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
                open={props.open}
                onClose={handleClose}
                message={props.message}
                key={props.message}
            />
        </Box>
    )
}