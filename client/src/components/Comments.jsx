
import React, { createElement, useEffect, useState} from "react"
import {useNavigate }from 'react-router-dom';
import axios from "axios";
import { useStateValue } from './Context';
import CommentObserver from "./CommentObserver";



function Comments(props) {
    const navigate = useNavigate();
    const { state, dispatch } = useStateValue(); 
    const [response, setResponse] = useState(null)
    const [comment, setComment] = useState("");
   
    const addComments={

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
        if(state.id.length == 0)
            navigate(`/Login`);
        else{
            await axios.post("http://localhost:5168/api/comments", addComments)

            .then(response => {

                console.log("Post created:", response.data)

            }
            )
            .catch(error => console.log(error))

          
        }
       
       
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
            <textarea  onChange={(e) => setComment(e.target.value)}></textarea>
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