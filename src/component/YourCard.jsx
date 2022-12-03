import React from 'react'
import YourCardData from '../data/YourCardData.json';
import Common from './Common';

const YourCard = () => {
    return (
        <>
            <Common data={YourCardData} />
        </>
    )
}

export default YourCard
