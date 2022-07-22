import React from 'react';
import TripBuilder from '../TripBuilder/TripBuilder';
import TripSummary from '../TripSummary/TripSummary';
import ItemContext from '../Context/ItemContext/ItemContext';
import { details, imageUrls } from '../utils/TripsDetails';

export default function TripMaker() {
    return(
        <div>
            <ItemContext.Provider value={{details, imageUrls}}>
                <TripBuilder />
            </ItemContext.Provider>
            <TripSummary />
        </div>
    )
}