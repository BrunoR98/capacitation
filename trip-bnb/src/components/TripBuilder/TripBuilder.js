import React, { useContext } from 'react';
import TripItem from '../TripItem/TripItem';
import TripButton from '../TripButton/TripButton';

//Contexts
import ItemContext from '../Context/ItemContext/ItemContext';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        width: '80%',
        margin: 'auto',
        justifyContent: 'center',
        height: '750px',
        display: 'flex',
        flexDirection: 'column',
    },
    itemsWrapper: {
        display: 'flex',
    },
    topBtn: {
        textAlign: 'right',
        margin: '0 15px 15px 0',
    },
});

export default function TripBuilder() {
    const classes = useStyles();
    const { details, imageUrls, button } = useContext(ItemContext);

    return(
        <div className={classes.wrapper}>
            <div className={classes.topBtn}>
                <TripButton 
                    button={button.cancelarBtn} 
                    details={details}
                />
            </div>
            <div className={classes.itemsWrapper}>
                <div>
                    <TripItem 
                        image={imageUrls.img01} 
                        details={details.hawai}
                        button={button.promoBtn}
                    />
                </div>
                <div>
                    <TripItem 
                        image={imageUrls.img02} 
                        details={details.brasil} 
                        button={button.reservarBtn}
                    />
                </div>
                <div>
                    <TripItem 
                        image={imageUrls.img03} 
                        details={details.usa}
                        button={button.comprarBtn}
                    />
                </div>
            </div>
        </div>
    )
}