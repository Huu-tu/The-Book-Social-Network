import React, { useEffect, useState } from "react";
// import UserService from "./Service/service";
import axios from 'axios'

export default function User(){
    const[User, SetUser] = useState('')

    const GetValue = async () =>{
        await axios.get('/get')
        .then((res) =>{
            SetUser(res.data)
            console.log(res.data)
        })
    }

    useEffect(()=>{
        GetValue()
    }, [])

    return(
        <>
           <p>Data is: {User}</p>
        </>
    )
}