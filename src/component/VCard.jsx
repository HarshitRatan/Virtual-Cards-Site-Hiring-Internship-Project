import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import LinearProgress from '@mui/material/LinearProgress';

const VCard = (props) => {
    const [progressValue, setProgressValue] = React.useState(0);

    React.useEffect(() => {
        var spend = props.spent.value;
        var total = props.available_to_spend.value;
        var result = (spend / total) * 100;
        setProgressValue(result);
    }, [props.spent.value, props.available_to_spend.value])

    return (
        <Card sx={{ width: 400, height: 250, boxShadow: '0 0 16px 16px rgba(153, 153, 153, 0.2)' }}>
            <CardContent>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0}
                        >
                            <Typography variant='body1' sx={{ fontWeight: '600' }}>
                                {props.name}
                            </Typography>
                            <Typography sx={{ fontSize: '13px', fontWeight: '200', color: 'gray' }}>
                                {props.owner_name} . {props.budget_name}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Avatar sx={{ bgcolor: '#fcd6d6' }}>
                                {props.card_type === "Burner" && (
                                    <LocalFireDepartmentIcon color="error" />
                                )}
                                {props.card_type === "Subscription" && (
                                    <SwapVertIcon color="error" />
                                )}
                            </Avatar>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: '5px' }}>
                    <Grid item xs={6}>
                        <span style={{
                            fontWeight: '600',
                            backgroundColor: 'rgb(244 237 237)',
                            borderRadius: '10px',
                            padding: '6px',
                        }}>
                            {props.card_type}
                        </span>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography sx={{ fontSize: '13px', fontWeight: '200', color: 'gray' }}>
                                {props.card_type === "Burner" && (
                                    <span>Expires : {props.expiry}</span>
                                )}
                                {props.card_type === "Subscription" && (
                                    <span>Limit : {props.limit}</span>
                                )}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <div style={{ marginTop: '20px' }}>
                    <LinearProgress
                        variant="determinate"
                        value={progressValue} sx={{
                            height: '10px',
                            borderRadius: '10px',
                            backgroundColor: 'green',
                            '& .MuiLinearProgress-barColorPrimary': {
                                backgroundColor: "red",
                            },
                        }} />
                </div>

                <Grid container spacing={2} sx={{ marginTop: '5px' }}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: '13px', fontWeight: '1000' }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <div style={{
                                    height: '10px',
                                    width: '10px',
                                    backgroundColor: 'red',
                                    borderRadius: '50%',
                                    float: 'left',
                                    marginRight: '5px'
                                }}></div>
                                Spent
                            </Stack>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography sx={{ fontSize: '13px', fontWeight: '1000' }}>
                                {props.spent.value} {props.spent.currency}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: '0.5px' }}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: '13px', fontWeight: '1000' }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <div style={{
                                    height: '10px',
                                    width: '10px',
                                    backgroundColor: 'green',
                                    borderRadius: '50%',
                                    float: 'left',
                                    marginRight: '5px'
                                }}></div>
                                Available To Spend
                            </Stack>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography sx={{ fontSize: '13px', fontWeight: '1000' }}>
                                {props.available_to_spend.value} {props.available_to_spend.currency}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default VCard
