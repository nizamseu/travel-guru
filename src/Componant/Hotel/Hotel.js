import React, { useEffect, useState } from 'react';
import hotelFakeData from '../FakeData/hotelFakeData'
import Google_Map from '../GoogleMap/Google_Map';
import StarIcon from '@material-ui/icons/Star';
import './hotel.css'
const Hotel = () => {
    const [bookingData,setBookingData]=useState([])
    useEffect(()=>{
        const booking = JSON.parse(sessionStorage.getItem('booking'))
        setBookingData(booking)
    },[])
   
    console.log("b",bookingData);
    return (
        <div className="hotel">
           
            <div className="col-md-6">
                <div className='text-left mt-5 pl-5'>
                    <h6 className="color">520 Stay {bookingData?.chekedIn}- {bookingData?.chekedOut}</h6>
                    <h4> Stay in {bookingData?.data?.destination} </h4>
                </div>
                {
                    hotelFakeData.map(item=>
                    <div className="d-flex"> 
                        <div style={{padding:'15px'}}>
                            <img style={{height:'200px'}} src={item.img} alt=""/>
                        </div>
                        <div className='text-left mt-3 ml-3'>
                             <h6>{item.title} </h6>
                            <div className="color">
                                <p> {item.title1} </p>
                                <p> {item.title2} </p>
                                <p> {item.title3} </p>
                            </div>
                            <div className="d-flex ">
                                <StarIcon style={{ color:"#FFAF38" }}/>
                                <p className="pl-2">{item.rating}</p>
                                <p className="pl-3"> {item.price}/night </p>
                            </div>
                            
                        </div>
                    </div>)
                }
            </div>
            <div className="col-md-5 mapArea">
               
                    <Google_Map bookingData={bookingData.center}></Google_Map>
            </div>
        </div>
    );
};

export default Hotel;