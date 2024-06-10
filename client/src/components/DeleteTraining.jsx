import axios from "axios";
import React, { createElement, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from './Context';

function DeleteTraining() {
    const [apiRequestAllDateTraining, setapiRequestAllDateTraining] = useState([]);
    const { id } = useParams();
    const [codeDate, setcodeDate] = useState(0);
    const { state, dispatch } = useStateValue();
    // const deltedFormData = {
    //     idClient: id,
    //     codeDate: codeDate
    // };
    // const deleteItem = async (item) => {
    //     console.log('delete')
    //     // console.log(item.codeDate);
    //     console.log(item.name);
    //     console.log(id)
    //     try {
    //         // codeDate= item.codeDate;
    //         await axios.delete("http://localhost:5168/api/appointment/", deltedFormData);

    //         console.log("Item deleted successfully");
    //     } catch (error) {
    //         console.error("Error deleting item: ", error);

    //     }
    // }

    const deleteItem = async (e) => {
   e.preventDefault();
        const deltedFormData = {
            idClient:state.id,
            codeDate: codeDate
        };
        debugger
        await axios.delete("http://localhost:5168/api/appointment", deltedFormData)
            .then(response => {
                console.log("dell created:", response.data);
            }
            )
            .catch(error => console.log("felld!!!!!",codeDate,state.id,error))
    }

    const onMouseClickShowDayClient = async (item) => {
        try {

            const url = item;
            const response = await fetch(url);
  const responseJson = await response.json();
            setapiRequestAllDateTraining(responseJson)
            console.log("data: ");
        } catch (error) {
            console.log("error: ", error);
        }
    }
    const [apiRequest, setapiRequest] = useState([]);
    useEffect(() => {
        const ShowTrainingClient = async () => {
            try {
                const url = "http://localhost:5168/api/training/" + state.id;
                const response = await fetch(url);
                const responseJson = await response.json();
                if (response.status === 200) {
                    setapiRequest(responseJson)
                }
                else {
                    setapiRequest("you dont have training")
                }
                console.log("data: ", apiRequest);
            } catch (error) {
                console.log("error: ", error);
            }
        };
        ShowTrainingClient()
    }, [])
    return (
        <>
            {apiRequest ? apiRequest.map((item) => (

                <table className='table table-dark'>
                    <tbody>
                        <tr>
                            <td onClick={() => onMouseClickShowDayClient("http://localhost:5168/api/Schedule?id=" + id + "&&training=" + item.name)}> {item.name}</td>
                        </tr>
                    </tbody>
                </table>

            )) : <h1>no data received</h1>}
            {apiRequestAllDateTraining ? apiRequestAllDateTraining.map((item) => (

                <table className='table table-dark'>
                    <tbody>
                        <tr>
                            <td id= {item.id}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setcodeDate(e.target.id)
                                }} >day: {item.day}</td>
                            <td>hour: {item.time}</td>
                        </tr>
                    </tbody>
                </table>

            )) : <h1>no data received</h1>}
            <br />
            <button onClick={deleteItem}>delete</button>
        </>
    )
}
export default DeleteTraining;

