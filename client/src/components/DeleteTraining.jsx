import axios from "axios";
import React, { createElement, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function DeleteTraining() {
    const deleteItem = async (item) => {
        try {
            await axios.delete(`http://localhost:5168/api/training/${item.id}`);
            console.log("Item deleted successfully");
        } catch (error) {
            console.error("Error deleting item: ", error);
            
        }
    }
    

    const [apiRequest, setapiRequest] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const ShowTrainingClient = async () => {
            try {
                const url = "http://localhost:5168/api/training/" + id;
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
                debugger
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

                            <td onClick={deleteItem(item)}> {item.name}</td>



                        </tr>
                    </tbody>
                </table>

            )) : <h1>no data received</h1>}
        </>
    )
}
export default DeleteTraining;