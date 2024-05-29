import React, { createElement, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import BasicTraining from "./BasicTraining";
import axios from "axios";


 function DeleteTraining(props) {
    const [isTrue, setIstrue] = useState(false)
    const [response, setResponse] = useState(null)
    const [hover, setHover] = useState(false);
   

    useEffect(() => {
        setResponse(props.response)
    })

    const onMouseOverCaptureHandler = (item) => {
        setHover(item.purposeOfTraining);
    };

    
    return (
        <>
            {response ? response.map((item, index) => (
               
                <table className='table table-dark'>
                    <tbody>
                        <tr>

                            <td onMouseOver={() => onMouseOverCaptureHandler(item)}> {item.name}</td>
                           
                            
                        </tr>
                    </tbody>
                </table>
                
            )) : <h1>no data received</h1>}
             <h1 id="purposeOfTraining">{hover}</h1>
        </>
    )

  

 }
 export default BasicTraining(DeleteTraining);