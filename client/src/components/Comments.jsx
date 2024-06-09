import { click } from "@testing-library/user-event/dist/click"
import React, { createElement, useEffect, useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import training from "./BasicTraining"
import { useStateValue } from './Context';


function Comments(props) {
    const { state, dispatch } = useStateValue(); 
    const [response, setResponse] = useState(null)
    const [comment, setComment] = useState("");
    const addComments={
        Id:2,
        Comments:comment,
        IdClient:state.id,
       
    }
    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:5168/api/comments"
            const response = await fetch(url)
            const responseJson = await (response.json())
            setResponse(responseJson)


        }

        fetchData()
    }, [])
    const  Submit = async (e) => {
        debugger
        await axios.post("http://localhost:5168/api/comments", addComments)

            .then(response => {

                console.log("Post created:", response.data)
            }
            )
            .catch(error => console.log(error))

    }


    return (

        <>

            {response ? response.map((item) => (

                <table className='table table-dark'>
                    <tbody>
                        {(
                            <tr>
                                <td > {item.clientName}</td>
                                <td > {item.comments}</td>
                            </tr>
                        )}</tbody>
                </table>

            )) : <h1>no data received</h1>}
            <h1>Add comment</h1>
            <input type="textArea" onChange={(e) => setComment(e.target.value)}></input>
            <br></br>
            <br></br>
            <button  onClick={(e) => {
                            e.preventDefault()
                           Submit()
                        }} > Submit</button>
        </>
    )


}
export default Comments;