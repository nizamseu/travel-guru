import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import fakeData from '../FakeData/FakeData';
import  './boking.css';
import { useForm } from 'react-hook-form';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    
    },
   
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 120,
    },
  }));
const Booking = () => {
    const {id} =useParams();
    const history=useHistory()
    const classes = useStyles();
    // eslint-disable-next-line eqeqeq
    const findData= fakeData.find(item=>item.id==id);
    const [selectedDate, setSelectedDate] = useState({
        chekedIn :new Date().toLocaleDateString(),
        chekedOut : new Date().toLocaleDateString()
    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
console.log("find",findData.center);

    const handleChekedInDate = (date) => {
        const newDates ={...selectedDate};
        newDates.chekedIn=date.toLocaleDateString();
      setSelectedDate(newDates);
    };
  
    const handleChekedOutDate = (date) => {
      const newDates ={...selectedDate};
      newDates.chekedOut=date.toLocaleDateString();
    setSelectedDate(newDates);
  };
   
  const onSubmit = data => {
      const newData={data,...selectedDate,...findData}
      sessionStorage.setItem('booking', JSON.stringify(newData));
      history.push('/hotel')
      console.log(newData);
  };
    return (
        <div className='boking'>
            <div className="col-md-6 mt-5  pl-5">
                <h1> {findData.title} </h1>
                <p> {findData.description} </p>
            </div>
            <div className="col-md-6  mt-5">
                    <div className='bookingForm'>
                       
                        
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                          
                            <p>Origin</p>
                            <input {...register("origin", { required: true })} placeholder="Origin" />
                            {errors.origin && <span>This field is required</span>} <br/>
                            <p>Destination</p>
                            <input {...register("destination", { required: true })} defaultValue={findData.title} placeholder="Destination" />
                            {errors.destination && <span>This field is required</span>} <br/>

                             <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container >
                                    <KeyboardDatePicker
                                    disableToolbar
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="From"
                                    format="MM/dd"
                                    className={classes.textField}
                                    value={selectedDate.chekedIn}
                                    onChange={handleChekedInDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                    <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="To"
                                    format="MM/dd"
                                    className={classes.textField}
                                    value={selectedDate.chekedOut}
                                    onChange={handleChekedOutDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                   
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <br/>
                           
                            <input style={{backgroundColor:'orange'}} value="Start Booking" type="submit" />
                        </form>

                    </div>
            </div>
        </div>
    );
};

export default Booking;