import React, { useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './homefeture.css';
import fakeData from '../FakeData/FakeData';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router';

const HomeFeture = () => {
    const history=useHistory()
    const [changeData,setChangeData]=useState({
        id:'',
        title:'Enjoy Your life',
        description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ",
        img: ''
    })

    const handleDataChange=(data)=>{
        setChangeData({
            id:data.id,
            title:data.title,
            description:data.description,
            img:data.img,
        })
    }

const handleBooking=(data)=>{
    const id=data.id
    const path =`/booking/${id}`
    history.push(path)
}

    return (
        <div className='homefeture'>
          
            <div className="homeFetureDetails col-md-4">
               
              <div>
                <h1> {changeData.title.toUpperCase()} </h1>
                <p> {changeData.description} </p>
              </div>

              <div>
                  {changeData.id&&
                    <Button
                        onClick={()=>handleBooking(changeData)}
                        variant="contained"
                        color="secondary"
                        endIcon={<ArrowForwardIcon/>}>
                        Booking Now
                    </Button>}
              </div>
            </div>

            <div className="col-md-8 d-flex ">
                {
                    fakeData.map(item=><BookingCard
                        handleDataChange={handleDataChange}
                         item={item}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default HomeFeture;