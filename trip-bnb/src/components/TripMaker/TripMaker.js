import React from 'react';
import TripBuilder from '../TripBuilder/TripBuilder';
import TripSummary from '../TripSummary/TripSummary';
import TripContext from '../Context/TripContext/TripContext';
import { details, imageUrls } from '../utils/TripsDetails';

export default function TripMaker() {
    return(
        <div>
            <TripContext.Provider value={{details, imageUrls}}>
                <TripBuilder />
            </TripContext.Provider>
            <TripSummary />
        </div>
    )
}