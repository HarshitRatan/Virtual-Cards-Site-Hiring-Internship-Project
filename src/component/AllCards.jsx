import React from 'react'
import AllData from '../data/AllCardData.json';
import Common from './Common';

const AllCards = () => {
    return (
        <>
            <Common data={AllData} />
        </>
    )
}

export default AllCards
