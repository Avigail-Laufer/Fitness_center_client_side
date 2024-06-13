import React, { createElement, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import BasicTraining from "./BasicTraining";
import axios from "axios";
import DeleteTraining from "./DeleteTraining";
import { useStateValue } from './Context';


function PersonalArea(props) {
    const navigate = useNavigate();

    const [numTraining, setnumTraining] = useState(0);
    const [codeDate, setcodeDate] = useState(0);
    const [TrainingFlag, setTrainingFlag] = useState(false);
    const [TrainingClientFlag, setTrainingClientFlag] = useState(false);
    const [ShowTrainingDayFlag, setShowTrainingDayFlag] = useState(false);
    const [removeFlag, setRemoveFlag] = useState(false);
    const [apiRequest, setapiRequest] = useState([]);
    const [apiRequestEror, setapiRequestEror] = useState();
    const [apiRequestDate, setapiRequestDate] = useState([]);
    const [apiRequestAllDateTraining, setapiRequestAllDateTraining] = useState([]);
    const { id } = useParams();
    const [response, setResponse] = useState([])
    const { state, dispatch } = useStateValue();
    const { canAdd, setcanAdd } = useStateValue();


    // useEffect(() => {
    //     setResponse(props.response)
    // })

    const showAddTraining = () => {

        setResponse(props.response)
        setTrainingFlag(!TrainingFlag)
    };
    


    const onMouseClickShowTrainingClient = async () => {
        setTrainingClientFlag(!TrainingClientFlag)
        try {
            const url = "http://localhost:5168/api/training/" + state.id;
            // Get users list in API request
            const response = await fetch(url);

            // Convert the response to json
            const responseJson = await response.json();
            // console.log("data: " , json.items);


           
            setapiRequest(responseJson)
            debugger
           
            if (responseJson.length === 0)
                alert("you dont have training")
            // Save the data
            // Save the data

            console.log("data: ", apiRequest);
        } catch (error) {
            debugger
            console.log("error: ", error);
            setapiRequestEror("you dont have training");
        }
    };


    const onMouseClickShowDayClient = async (item, num) => {
        setShowTrainingDayFlag(!ShowTrainingDayFlag)
        try {

            const url = item;
            // Get users list in API request
            const response = await fetch(url);

            // Convert the response to json
            const responseJson = await response.json();
            // console.log("data: " , json.items);
          
            if (num == 1) {

                setapiRequestDate(responseJson)
            }
            if (num == 2) { setapiRequestAllDateTraining(responseJson) }
            // Save the data

            console.log("data: ", apiRequestDate);
        } catch (error) {
            console.log("error: ", error);
        }
    }

    const AddTRaining = async (e) => {

        e.preventDefault();
        const updatedFormData = {
            idClient: id,
            codeDate: codeDate
        };
        await axios.post("http://localhost:5168/api/appointment", updatedFormData)
            .then(response => {
                console.log("Post created:", response.data)
            }
            )
            .catch(error => console.log(error))
        
    }
   const chck2=async (e) => {
    e.preventDefault();
     await axios.get("http://localhost:5168/api/appointment/bool?codeDate="+codeDate+"&id="+state.id)
         .then(
             response => {
                //setcanAdd(response.data)
                 console.log("Post created:", response.data)
                 if (response.data){AddTRaining(e)}
                 else{alert("you have this appointment plese choose another appointment")}
             }
             )
            .catch(error => console.log(error))
                   
        }
    const TryAddTraining = async (e) => {
        e.preventDefault();
        await axios.get("http://localhost:5168/api/appointment?id=" + state.id )
           .then(responses => {
              console.log(responses.data);
                setnumTraining(response.data)
                if (responses.data.num > 0) {
                    chck2(e)
                 }
                else {
                    alert("you dont could add training with your currect package ")
                    console.log("you dont could add training")
                }
            }
            )
            .catch(error => console.log(error))
    };


    return (
        <>
            <button onClick={() => onMouseClickShowTrainingClient()}>get your training</button>
            <td>{apiRequestEror}</td>

            {apiRequest ? apiRequest.map((item) => (

                <table className='table table-dark'>
                    <tbody>
                        <tr>

                            {TrainingClientFlag && (<td onClick={() => onMouseClickShowDayClient("http://localhost:5168/api/Schedule?id=" + id + "&&training=" + item.name, 1)}> {item.name}</td>)}



                        </tr>
                    </tbody>
                </table>

            )) : <h1>no data received</h1>}
            <br />



            {apiRequestDate ? apiRequestDate.map((item) => (

                <table className='table table-dark'>
                    <tbody>
                        {ShowTrainingDayFlag && (
                            <tr>

                                <td>day- {item.day}</td>
                                <br></br>
                                <td>time-  {item.time}</td>
                                <br></br>
                                <td>number room-  {item.numberRoom}</td>


                            </tr>
                        )} </tbody>
                </table>
            )) : <h1>no data received</h1>}


            
            <button onClick={() => showAddTraining()}>add training </button>
            <br></br>
            {response ? response.map((item, index) => (
                <table >
                    <tbody>
                        <tr>{TrainingFlag && (

                            <button if onClick={() => onMouseClickShowDayClient("http://localhost:5168/api/schedule/name/" + item.name, 2)}>{item.name}</button>
                        )} </tr>
                    </tbody>
                </table>
            )) : <h1>no data received</h1>}


            {apiRequestAllDateTraining ? apiRequestAllDateTraining.map((item) => (

                <table className='table table-dark'>
                    <tbody>
                        <tr>

                            <td id={item.id}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setcodeDate(e.target.id)
                                }} >day: {item.day}</td>
                            <td>hour: {item.time}</td>



                        </tr>
                    </tbody>
                </table>

            )) : <h1>no data received</h1>}

            <br></br>
            {TrainingFlag && (
                <button onClick={TryAddTraining}>Add</button>)}
            <br />

            {apiRequest ? apiRequest.map((item) => (

                <table className='table table-dark'>
                    <tbody>
                        {removeFlag && (
                            <tr>
                                <td > {item.name}</td>
                            </tr>
                        )}</tbody>
                </table>

            )) : <h1>no data received</h1>}

            <button onClick={() => { navigate(`/DeleteTraining/${id}`) }}>Remove your training</button>

            <p>{state.firstName}</p>

        </>
    )


}
export default BasicTraining(PersonalArea);