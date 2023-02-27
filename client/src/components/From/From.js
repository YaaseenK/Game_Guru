import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './formStyle';


const Form = () => {
    const [formData, setFormData] = useState({
managerName: '', email: '', country: '', phone: '', tournamentName: '', participantCount:'', prizePool:'', tournamentDate:'', gamePlayed: '' 
});
    const classes = useStyles();

    const handleSumbit = () => {}

const clear = () => {}
    return (
        <>
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSumbit}>
                <Typography variant='h6'>Registration Form</Typography>
                <TextField name="manager" variant="outlined" label="Manager" fullWidth value={FormData.Manager} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <TextField name="email" variant="outlined" label="email" fullWidth value={FormData.email} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <TextField name="country" variant="outlined" label="country" fullWidth value={FormData.country} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <TextField name="phone" variant="outlined" label="phone" fullWidth value={FormData.phone} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <TextField name="tounrmentName" variant="outlined" label="tournament name" fullWidth value={FormData.tournamentName} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <TextField name="participantCount" variant="outlined" label="ParticipantCount" fullWidth value={FormData.participantCount} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <TextField name="prizepool" variant="outlined" label="prizePool" fullWidth value={FormData.prizePool} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <TextField name="tournamentDate" variant="outlined" label="tournamentDate" fullWidth value={FormData.tournamentDate} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <TextField name="gamePlayed" variant="outlined" label="gamePlayed" fullWidth value={FormData.gamePlayed} onChange={(e)=> setManagerData({...managerData, manager: e.target.value})} />
                <Button className={classes.buttonSubmit} variant ="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant ="contained" color="secondary" size="small" onClick={clear}  fullWidth>Clear</Button>
                
            </form>
        </Paper>
        </>
    )
}

export default Form;