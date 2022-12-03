import React from 'react'
import BlockedCardData from '../data/blockedCard.json';
import Common from './Common';

const BlockedCards = () => {
    return (
        <>
            <Common data={BlockedCardData} />
        </>
    )
}

export default BlockedCards
