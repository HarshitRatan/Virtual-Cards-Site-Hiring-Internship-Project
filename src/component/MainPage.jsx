import React from 'react'
import Container from '@mui/material/Container';
import Header from './Header';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import YourCard from './YourCard';
import AllCards from './AllCards';
import BlockedCards from './BlockedCards';
import Divider from '@mui/material/Divider';

const MainPage = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container maxWidth="lg" sx={{ marginTop: '30px' }}>
            <Header />
            <Box sx={{ width: '100%', marginTop: '30px' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab value="1" label="Yours" />
                    <Tab value="2" label="All" />
                    <Tab value="3" label="Blocked" />
                </Tabs>
                <Divider />
            </Box>
            {
                value === "1" && (
                    <>
                        <YourCard />
                    </>
                )
            }
            {
                value === "2" && (
                    <>
                        <AllCards />
                    </>
                )
            }
            {
                value === "3" && (
                    <>
                        <BlockedCards />
                    </>
                )
            }
        </Container>
    )
}

export default MainPage
