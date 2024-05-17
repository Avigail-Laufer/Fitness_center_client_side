import React, { createElement, useEffect, useState } from "react"

export default function PersonalArea() {
    const [apiRequest, setapiRequest] = useState([]);
    
        const onMouseClickShowTrainingClient= async (id) => {
            try {
                const url = "http://localhost:5168/api/training/"+id;
                // Get users list in API request
                const response = await fetch(url);

                // Convert the response to json
                const responseJson = await response.json();
                // console.log("data: " , json.items);
            
            

                // Save the data
                setapiRequest(responseJson)
                console.log("data: " , apiRequest);
            } catch (error) {
                console.log("error: ", error);
            }
        };



    
   
    return (
        <>
        <button  onClick={() => onMouseClickShowTrainingClient("214660664")}>get your training</button>
         { apiRequest ? apiRequest.map((item) => (
               
               <table className='table table-dark'>
                   <tbody>
                       <tr>

                           <td> {item.name}</td>
                          
                           
                       </tr>
                   </tbody>
               </table>
               
           )) : <h1>no data received</h1>}
            
        </>
    )

  
 }