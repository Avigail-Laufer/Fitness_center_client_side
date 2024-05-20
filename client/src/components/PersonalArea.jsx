import React, { createElement, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function PersonalArea(props) {
    const [apiRequest, setapiRequest] = useState([]);
    const [apiRequestDate, setapiRequestDate] = useState([]);
    const [training, setTraining] = useState(" ")
    const {id}=useParams();
    
        const onMouseClickShowTrainingClient= async () => {
            debugger
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


        const onMouseClickShowDayClient = async () => { 
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
        <button  onClick={() => onMouseClickShowTrainingClient()}>get your training</button>
        
       
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
           <button  onClick={() => onMouseClickShowDayClient ()}>get your date training</button>
          
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