import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './formStyle';


const Form = () => {
    const classes = useStyles();

    const handleSumbit = () => {}


    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSumbit}>
                <Typography variant='h6'>Creating a Memory</Typography>
            </form>
        </Paper>
    )
}

export default Form;