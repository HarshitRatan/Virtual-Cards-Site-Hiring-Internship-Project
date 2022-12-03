import React from 'react'
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import FilterListIcon from '@mui/icons-material/FilterList';
import Grid from "@mui/material/Grid";
import VCard from './VCard';
import CircularProgress from "@mui/material/CircularProgress";
import { InView } from "react-intersection-observer";
import Footer from './Footer';

const Common = ({ data }) => {
    const [isloading, setIsLoading] = React.useState(true);
    const [nextDataLoadingFlag, setNextDataLoadingFlag] = React.useState(false);
    const [visible, setVisible] = React.useState(10);
    const [inView, setInView] = React.useState(false);
    const [searchText, setSearchText] = React.useState("");

    React.useEffect(() => {
        if (inView.toString() === "true") {
            setNextDataLoadingFlag(true);
            setTimeout(() => {
                setNextDataLoadingFlag(false);
                setVisible((prev) => prev + 10)
            }, 1000);
        }
    }, [inView]);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const handleSearch = (e) => {
        setIsLoading(true);
        setSearchText(e.target.value);
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }
    return (
        <div>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
                sx={{
                    marginTop: '30px'
                }}
            >
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    value={searchText}
                    onChange={(e) => handleSearch(e)}
                />
                <Box sx={{
                    backgroundColor: '#e6dede',
                    padding: '8px',
                    borderRadius: '3px',
                }}>
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={2}
                    >
                        <FilterListIcon />
                        Filter
                    </Stack>
                </Box>
            </Stack>
            <Grid container spacing={4} sx={{ marginTop: "50px" }}>
                {isloading && (
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        sx={{ width: "100%" }}
                    >
                        <CircularProgress size="50px" />
                    </Stack>
                )}
                {!isloading && searchText.length === 0 &&
                    data.slice(0, visible)
                        .map((item, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <VCard {...item} />
                            </Grid>
                        ))}
                {!isloading && searchText.length > 0 &&
                    data.filter((value) => value.name.toString().toLowerCase().includes(searchText.toLowerCase()))
                        .slice(0, visible)
                        .map((item, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <VCard {...item} />
                            </Grid>
                        ))}
            </Grid>
            {!isloading && nextDataLoadingFlag && (
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: "100%" }}
                >
                    <CircularProgress size="50px" />
                </Stack>
            )}
            <InView onChange={setInView}>
                <Footer />
            </InView>
        </div>
    )
}

export default Common
