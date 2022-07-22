import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import TripButton from '../TripButton/TripButton';

const useStyles = createUseStyles({
    wrapper: {
        marginRight: '15px',
    },
    item: {
        border: '1px solid #999',
        backgroundColor: '#eee',
        padding: '20px',
        '& img': {
            width: '450px',
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
        
    },
    price: {
        textAlign: 'right'
    },
});

export default function TripItem({ image, details, button }) {
    const classes = useStyles();
    
    return( 
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <img alt={image.name} src={image.url} />
                <div className={classes.details}>
                    <h4>{details.name}</h4>
                    <p>{details.description}</p>
                </div>
                <div className={classes.price}>
                   U$D {details.price}
                </div>
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