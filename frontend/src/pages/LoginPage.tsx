import {routerConfig} from "./routerConfig.ts";
import {Box, Button, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

export function LoginPage() {
    function handleLogin() {
        const host = window.location.host === routerConfig.API.HOST5173 ? routerConfig.API.HOST8080: window.location.origin

        window.open(host + routerConfig.API.GITHUB_AUTH, '_self')
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Login or Register
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Please login or register over your Github account.
                </Typography>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleLogin}
                    sx={{ mt: 2, px: 4, py: 1, fontSize: 16, mr:4 }}
                >
                    Register
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    sx={{ mt: 2, px: 4, py: 1, fontSize: 16 }}
                >
                    Login
                </Button>
            </Paper>
        </Box>
    )
}
