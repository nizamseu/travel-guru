import React, { useEffect, useState } from 'react';
import Surahs from './Surahs';
import axios from 'axios';
const Quran = () => {
    const [quran,setQuran]=useState([]);
    // useEffect(()=>{
    //     fetch('http://api.alquran.cloud/v1/quran/quran-uthmani')
    //     .then(res =>res.json())
    //     .then(data=> {
    //         setQuran(data)

    //     })
    // },[])


 
    // useEffect(() => {
    //     fetch('http://api.alquran.cloud/v1/quran/quran-uthmani')
    //     .then(res => res.json())
    //     .then(data =>{
    //       setQuran(data)
    //     })

    // },[]);



      const getUsers = async () => {
        const users = await axios.get('http://api.alquran.cloud/v1/quran/quran-uthmani');
        setQuran(users.data.surahs);
       };
       useEffect(() => {
        getUsers();
       }, []);

quran && console.log("me",quran)

    return (
        <div>

        { 
        quran.surahs.length >0 && quran.surahs.map(sura =><Surahs sura={sura}></Surahs>)
        
        }
         
        </div>
    );
};

export default Quran;