import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import TripItem from '../TripItem/TripItem';
import TripButton from '../TripButton/TripButton';
import ItemContext from '../Context/ItemContext/ItemContext';

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
    const { details, imageUrls } = useContext(ItemContext);

    return(
        <div className={classes.wrapper}>
            <div className={classes.topBtn}>
                <TripButton />
            </div>
            <div className={classes.itemsWrapper}>
                <div>
                    <TripItem image={imageUrls.img01} details={details.trip01}/>
                </div>
                <div>
                    <TripItem image={imageUrls.img02} details={details.trip02}/>
                </div>
                <div>
                    <TripItem image={imageUrls.img03} details={details.trip03}/>
                </div>
            </div>
        </div>
    )
}