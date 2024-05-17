import React, { createElement, useEffect, useState } from "react"

export default function PersonalArea(props) {
    const [apiRequest, setapiRequest] = useState([]);
    const [apiRequestDate, setapiRequestDate] = useState([]);
    const [training, setTraining] = useState(" ")
    
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


        const onMouseClickShowDayClient = async (id) => { 
            try {
                
                const url = "http://localhost:5168/api/Schedule?id="+id+"&&training="+training;
                // Get users list in API request
                const response = await fetch(url);

                // Convert the response to json
                const responseJson = await response.json();
                // console.log("data: " , json.items);
            
            

                // Save the data
                setapiRequestDate(responseJson)
                console.log("data: " , apiRequestDate);
            } catch (error) {
                console.log("error: ", error);
            }
        }


    
   
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
           <br />
           <input placeholder="enter training for get it date" onChange={(e) => setTraining(e.target.value)}></input>
           <br />
           <button  onClick={() => onMouseClickShowDayClient ("214660664")}>get your date training</button>
          
            { apiRequestDate? apiRequestDate.map((item) => (
               
               <table className='table table-dark'>
                   <tbody>
                       <tr>

                           <td>day- {item.day}</td>
                           <br></br>
                           <td>time-  {item.time}</td>
                           <br></br>
                           <td>number room-  {item.numberRoom}</td>
                          
                           
                       </tr>
                   </tbody>
               </table>
 )): <h1>no data received</h1> } 
            
        </>
    )

  
 }