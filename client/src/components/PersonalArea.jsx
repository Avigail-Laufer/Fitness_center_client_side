import React, { createElement, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import HomeTrainingComponent from "./BasicTraining";
import axios from "axios";

function PersonalArea(props) {

    const [codeDate, setcodeDate] = useState();
    const [TrainingFlag, setTrainingFlag] = useState(false);
    const [TrainingClientFlag, setTrainingClientFlag] = useState(false);
    const [ShowTrainingDayFlag, setShowTrainingDayFlag] = useState(false);
    const [apiRequest, setapiRequest] = useState([]);
    const [apiRequestEror, setapiRequestEror] = useState();
    const [apiRequestDate, setapiRequestDate] = useState([]);
    const [apiRequestAllDateTraining, setapiRequestAllDateTraining] = useState([]);
    const { id } = useParams();
    const [response, setResponse] = useState(null)
    const [formData, setFormData] = useState({

        idClient: id,
        codeDate: 500
    });

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
            const url = "http://localhost:5168/api/training/" + id;
            // Get users list in API request
            const response = await fetch(url);

            // Convert the response to json
            const responseJson = await response.json();
            // console.log("data: " , json.items);


            if (response.status === 200) {
                setapiRequest(responseJson)
            }
            else {
                setapiRequest("you dont have training")
            }
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
            debugger

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

    const AddTraining = async (e) => {
        debugger
        e.preventDefault();

        await axios.post("http://localhost:5168/api/appointment", formData)

            .then(response => {


                console.log("Post created:", response.data)
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
            <button onClick={showAddTraining}>add training </button>
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

                            <td id="codeDate" value={item.id}  >day: {item.day}</td>
                            <td>hour: {item.time}</td>



                        </tr>
                    </tbody>
                </table>

            )) : <h1>no data received</h1>}
            {TrainingFlag && (
                <button onClick={AddTraining}    >Add</button>)}

        </>
    )


}
export default HomeTrainingComponent(PersonalArea);