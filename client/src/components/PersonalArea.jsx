import React, { createElement, useEffect, useState } from "react"

export default function PersonalArea() {
    const [apiRequest, setapiRequest] = useState([]);
        
        const onMouseClickShowTrainingClient= async (id) => {
            try {
                const url = "http://localhost:5168/api/training/${id}"
                // Get users list in API request
                const response = await fetch(url);

                // Convert the response to json
                const json = await response.json();
                console.log("data: " , json.items);

                // Save the data
                setapiRequest(json.items)
            } catch (error) {
                console.log("error: ", error);
            }
        };



    
   
    return (
        <>
            <button onClick={() => onMouseClickShowTrainingClient("203669558")}> {}</button>
        </>
    )

  
 }