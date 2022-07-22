import React from 'react';
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
        textAlign: 'right',
        marginTop: '12px',
    },
    details: {
        
    },
    price: {
        textAlign: 'right'
    },
});

export default function TripItem() {
    const classes = useStyles();
    // const imgUrl= undefined;
    return(
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <img alt='img01' src='/images/img01.jpg' />
                <div className={classes.details}>
                    <h4>Nombre</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a ratione iure suscipit 
                        ipsam porro non quam pariatur consequatur facere, minus placeat ea molestiae laboriosam possimus, 
                        cumque reiciendis odio ipsa.
                    </p>
                </div>
                <div className={classes.price}>
                   precio
                </div>
            </div>
            <div className={classes.bottomBtn}>
                <TripButton />
            </div>
        </div>
    )
}