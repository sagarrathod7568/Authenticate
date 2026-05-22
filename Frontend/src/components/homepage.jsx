import React from "react";
import {useEffect} from 'react'
import { Link } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import "bootstrap/dist/css/bootstrap.min.css"

function Homepage(){

    useEffect(()=>{
    },[])

    return(
        <>
            <h1>Homepage</h1>
            <Link to="/signup" element={Signup} className="btn btn-default border" >Signup</Link>
            <Link to="/login" element={Login} className="btn btn-default border">Login</Link>
        </>
    )
}

export default Homepage