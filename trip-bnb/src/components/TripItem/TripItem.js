import React from 'react';
import PropTypes from 'prop-types';

//Component
import TripButton from '../TripButton/TripButton';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        marginRight: '15px',
    },
    item: {
        border: '1px solid #999',
        backgroundColor: '#eee',
        padding: '20px',
        height: '590px',
        '& img': {
            width: '460px',
            height: '400px',
            border: '1px solid #444',
        }
    },
    bottomBtn: {
        display: 'inline-block',
        float: 'right',
        textAlign: 'right',
        marginTop: '12px',
    },
    details: {
        fontSize: '17px',
        '& span': {
            fontSize: '30px',
            fontWeight: '400'
        }
    },
    price: {
        float: 'right',
        fontSize: '24px',
    },
});

export default function TripItem({ image, details, button }) {
    const classes = useStyles();
    
    return( 
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <img alt={image.name} src={image.url} />
                <div className={classes.details}>
                    <span>{details.name}</span>
                    <p>{details.description}</p>
                </div>
                <span className={classes.price}>
                   U$D {details.price}
                </span>
            </div>
            <div className={classes.bottomBtn}>
                <TripButton button={button} details={details}/>
            </div>
        </div>
    )
}

TripItem.propTypes = {
    image: PropTypes.object.isRequired,
    details: PropTypes.object.isRequired,
    button: PropTypes.object.isRequired,
}