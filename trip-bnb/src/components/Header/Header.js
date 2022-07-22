import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from "../Context/UserContext/UserContext";

const useStyles = createUseStyles({
    wrapper: {
        borderBottom: '2px solid #bbb',
        margin: 'auto',
        width: '96%',
    },
    image: {
        display: 'flex',
        margin: '5px',
        '& h2': {
            marginLeft: '5px',
        }
    },
    msg: {
        position: 'absolute',
        top: '40px',
        right: '3%',
        fontSize: '25px',
        fontWeight: '400'
    }
});

export default function Header() {
    const classes = useStyles();
    const user = useContext(UserContext);

    return(
        <div className={classes.wrapper}>
            <div className={classes.image}>
                <img src='/images/tripbnb.jpg' alt='trip-bnb'/>
                <h2>TripBnB</h2>
            </div>
            <div className={classes.msg}>
                <span>Bienvenido, {user.name}.</span>
            </div>
        </div>
    )
}