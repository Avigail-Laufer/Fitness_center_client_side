import { Navigate } from 'react-router-dom';
import { useStateValue } from './Context';
import React, { createElement, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default  function CheckSign() {
    const navigate = useNavigate();
    const { state, dispatch } = useStateValue();
    useEffect( () => {
      
        if(state.id.length == 0)
            navigate(`/Login`);
        else{
            navigate(`/PersonalArea`);
        }
       
    }, [])}