import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import VideocamIcon from '@mui/icons-material/Videocam';

const Header = () => {
    return (
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="h5" sx={{ fontWeight: '600' }}>
                        Virtual Cards
                    </Typography>
                    <Box sx={{
                        backgroundColor: '#e6dede',
                        color: 'blue',
                        borderRadius: '10px',
                        padding: '8px'
                    }}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <VideocamIcon />
                            Learn More
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={2}
                >
                    <Button variant="contained" sx={{
                        backgroundColor: '#FFF',
                        color: 'black',
                        fontWeight: '600',
                        "&:hover": {
                            backgroundColor: '#eeebeb',
                        }
                    }}>
                        <AddIcon />
                        Virtual Card
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Header
