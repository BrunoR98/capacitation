import React, { useReducer } from 'react';
import TripBuilder from '../TripBuilder/TripBuilder';
import TripSummary from '../TripSummary/TripSummary';
import { user } from '../utils/User';

//Contexts
import ItemContext from '../Context/ItemContext/ItemContext';
import TripContext from '../Context/TripContext/TripContext';

import { details, imageUrls } from '../utils/TripsDetails';
import { button } from '../utils/Buttons'

function reducer(state, item) {
    switch(item.button.type) {
        case 'promo':
            console.log(`Promo asignada para su viaje a ${item.details.name}, recuerde que es INCANCELABLE`);
            return [...state, item.details.name];
        case 'reservar':
            console.log(`Reserva realizada, este mail enviado a ${user.email} confirma su reserva para el viaje a ${item.details.name}`);
            return [...state];
        case 'comprar':
            console.log(`Compra realizada, esperamos que disfrute el viaje a ${item.details.name}, este sera nuestro mail de contacto con usted ${user.email}`);
            return [...state, item.details.name];
        case 'cancelar':
            return cancelFunctionality([...state]);
        default:
            return [...state];
    }
}

function cancelFunctionality(array){
    const temp = [...array];
    const lastIndex = temp.pop();
    if(lastIndex === 'Hawai'){
        alert('No se puede eliminar una promo');
        return array;
    } else if(lastIndex === undefined){
        alert('Nada que cancelar');
        return array;
    }
    console.log('Se ha eliminado su viaje a ' + lastIndex);
    return temp;
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