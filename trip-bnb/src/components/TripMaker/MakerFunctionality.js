export function discountPromo(item) {
    const promo = item.details.price;
    return promo - (promo*0.15);
}

export function cancelFunctionality(state, stateCopy){
    let stateTemp = [...stateCopy];
    const lastIndex = stateTemp.pop();

    switch(lastIndex) {
        case 'Hawai':
            alert(`Can´t delete a promotion.`);
            return state;
        case 'Brasil':
            console.log(`Your reservation to ${lastIndex} has been deleted successfully.`);
            stateCopy.pop();
            return state;
        case 'Dubai':
            console.log(`Your purchase for the trip to ${lastIndex} has been deleted successfully.`);
            stateCopy.pop();
            state.pop();
            return state;
        case undefined:
            alert('You need to buy something before canceling.');
            return state;
        default:
            return state;
    }
}