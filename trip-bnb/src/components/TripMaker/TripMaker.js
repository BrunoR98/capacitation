import React from 'react';
import TripBuilder from '../TripBuilder/TripBuilder';
import TripSummary from '../TripSummary/TripSummary';


export default function TripMaker() {
    return(
        <div>
            <TripBuilder />
            <TripSummary />
        </div>
    )
}