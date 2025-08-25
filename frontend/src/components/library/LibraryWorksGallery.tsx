import type {LibraryWork} from "../../types/libraryType.ts";
import {LoadingSpinner} from "../LoadingSpinner.tsx";
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import {LibraryWorkCard} from "./LibraryWorkCard.tsx";

type LibraryWorksGalleryProps = {
    libraryWorkList: LibraryWork[];
    loading: boolean;
}

export function LibraryWorksGallery({libraryWorkList,loading}: LibraryWorksGalleryProps) {

    if (loading) return <LoadingSpinner/>;
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} >

                {libraryWorkList.map((libraryWork) => (
                    <Grid
                        size={{xs:12,sm:6,md:3}}
                        key={libraryWork.key}
                    >
                        <LibraryWorkCard libraryWork={libraryWork}/>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}
