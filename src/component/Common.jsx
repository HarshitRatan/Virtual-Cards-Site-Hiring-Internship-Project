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
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Common = ({ data }) => {
    const [isloading, setIsLoading] = React.useState(true);
    const [nextDataLoadingFlag, setNextDataLoadingFlag] = React.useState(false);
    const [visible, setVisible] = React.useState(10);
    const [inView, setInView] = React.useState(false);
    const [searchText, setSearchText] = React.useState("");
    const [burnerFilterFlag, setBurnerFilterFlag] = React.useState(false);
    const [subscriptionFilterFlag, setSubscriptionFilterFlag] = React.useState(false);

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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        <div>
                            <Button onClick={handleClick} sx={{ color: 'black', fontWeight: '600' }}>
                                Filter
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <Card sx={{
                                    width: 300,
                                    height: 120,
                                    boxShadow: '0 0 16px 16px rgba(153, 153, 153, 0.2)'
                                }}>
                                    <CardContent>
                                        <Typography variant="body1" sx={{ fontWeight: '600', color: 'black' }}>
                                            Filter
                                        </Typography>
                                        <Divider />
                                        <Typography sx={{ marginTop: '10px', fontSize: '13px', fontWeight: '600', color: 'gray' }}>
                                            Type
                                        </Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={2}
                                            sx={{ marginTop: '10px' }}
                                        >
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Checkbox checked={subscriptionFilterFlag} onChange={() => setSubscriptionFilterFlag(!subscriptionFilterFlag)} />}
                                                    label="Subscription" />
                                            </FormGroup>
                                            <FormGroup >
                                                <FormControlLabel
                                                    control={<Checkbox checked={burnerFilterFlag} onChange={() => setBurnerFilterFlag(!burnerFilterFlag)} />}
                                                    label="Burner" />
                                            </FormGroup>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Menu>
                        </div>
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
                    data.filter((value) => {
                        if (burnerFilterFlag && subscriptionFilterFlag) {
                            return value.card_type === "Subscription" || value.card_type === "Burner"
                        }
                        if (burnerFilterFlag) {
                            return value.card_type === "Burner"
                        }
                        if (subscriptionFilterFlag) {
                            return value.card_type === "Subscription"
                        }
                        return value.name;
                    }).slice(0, visible)
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
                    data.filter((value) => {
                        if (burnerFilterFlag && subscriptionFilterFlag) {
                            return value.name.toString().toLowerCase().includes(searchText.toLowerCase())
                                && (value.card_type === "Subscription" || value.card_type === "Burner")
                        }
                        if (burnerFilterFlag) {
                            return value.name.toString().toLowerCase().includes(searchText.toLowerCase())
                                && value.card_type === "Burner"
                        }
                        if (subscriptionFilterFlag) {
                            return value.name.toString().toLowerCase().includes(searchText.toLowerCase())
                                && value.card_type === "Subscription"
                        }
                        return value.name.toString().toLowerCase().includes(searchText.toLowerCase())
                    })
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
