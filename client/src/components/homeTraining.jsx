import { click } from "@testing-library/user-event/dist/click"
import React, { createElement, useEffect, useState } from "react"


export default function HomeTraining() {
    

    const [isTrue, setIstrue] = useState(false)
    const [response, setResponse] = useState(null)
    const [hover, setHover] = useState(false);

    const onMouseOverCaptureHandler = (item) => {
        setHover(item.purposeOfTraining);
    };

    useEffect( () => {
        const fetchData = async () => {
            const url = "http://localhost:5168/api/training"
            const response = await fetch(url)
            const responseJson=await (response.json())
            setResponse(responseJson)
        
        
        }

        fetchData()
    }, [])
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