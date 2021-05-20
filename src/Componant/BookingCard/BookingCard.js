import React from 'react';
import { Card } from 'react-bootstrap';
import fakeData from '../FakeData/FakeData';
import './bookingCard.css';
import {  Link } from "react-router-dom";
const BookingCard = ({item,handleDataChange}) => {

    return (
    <Card className='bookingCard' style={{ width: '16rem' }}>
           <Link onClick={()=>{handleDataChange(item)}} className='link'>
           <Card.Img src={item.img} alt="Card image" />

            <Card.ImgOverlay>
                <Card.Title style={{marginTop:'130%'}}>{item.title.toUpperCase()}</Card.Title>
            
            </Card.ImgOverlay>
           </Link>
    </Card>
        
    );
};

export default BookingCard;