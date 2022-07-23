import React, { useReducer } from 'react';

//Components
import TripBuilder from '../TripBuilder/TripBuilder';
import TripSummary from '../TripSummary/TripSummary';

//Component functionality
import { cancelFunctionality, discountPromo } from './MakerFunctionality';

//Contexts
import ItemContext from '../Context/ItemContext/ItemContext';
import TripContext from '../Context/TripContext/TripContext';

//Utils
import { details, imageUrls } from '../utils/TripsDetails';
import { button } from '../utils/Buttons'
import { user } from '../utils/User';

/** 
 * - Control variables
 *  StateCopy is used to gather reservations and other elements of the state (promo and buy´s)
 * to manipulate them in the cancel functionality. (./MakerFunctionality).
 *  cancelFlag is used to control that only the last element is canceled.
 */
let stateCopy = [];
let cancelFlag = false;

function reducer(state, item) {
    switch(item.button.type) {
        case 'promo':
            cancelFlag = false;
            if([...state].includes(item.details.name)){
                alert('Promotion already applied');
                return [...state];
            }
            const discount = discountPromo(item);
            console.log(`Promotion applied for your trip to ${item.details.name}, final price: U$D ${discount}. Remember, that is not cancelable.`);
            stateCopy.push(item.details.name);
            return [...state, item.details.name];
        case 'reserve':
            cancelFlag = false;
            if(stateCopy.includes(item.details.name)){
                alert(`Your reservation has already been made, confirmation send to ${user.email}.`);
                return [...state];
            }
            console.log(`Reservation made, this email sent to ${user.email} confirm your reservation for the trip to ${item.details.name}.`);
            stateCopy.push(item.details.name);
            return [...state];
        case 'buy':
            cancelFlag = false;
            console.log(`Purchase made, we hope you enjoy the trip to ${item.details.name}, this will be our contact email with you ${user.email}.`);
            stateCopy.push(item.details.name);
            return [...state, item.details.name];
        case 'cancel':
            if(cancelFlag){
                return [...state];
            }
            cancelFlag = true;
            return cancelFunctionality([...state], stateCopy);
        default:
            return [...state];
    }
}

export default function TripMaker() {
    const [trip, setTrip] = useReducer(reducer, []);

    return(
        <div>
            <TripContext.Provider value={{trip, setTrip}}>
                <ItemContext.Provider value={{details, imageUrls, button}}>
                    <TripBuilder />
                </ItemContext.Provider>
                <TripSummary />
            </TripContext.Provider>
        </div>
    )
}