
import React, { createElement, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useStateValue } from './Context';
import CommentObserver from "./CommentObserver";
import './Comments.css';



function Comments(props) {
    const navigate = useNavigate();
    const { state, dispatch } = useStateValue();
    const [response, setResponse] = useState(null)
    const [comment, setComment] = useState("");

    const addComments = {

        Comments: comment,
        IdClient: state.id,

    }

    const fetchData = async () => {
        const url = "http://localhost:5168/api/comments"
        const response = await fetch(url)
        const responseJson = await (response.json())
        setResponse(responseJson)


    }
    useEffect(() => {
        fetchData()
    }, [])
    const Submit = async (e) => {
        if (state.id.length == 0)
            navigate(`/Login`);
        else {
            await axios.post("http://localhost:5168/api/comments", addComments)

                .then(response => {

                    console.log("Post created:", response.data)

                }
                )
                .catch(error => console.log(error))



        }
        fetchData();


    }


    return (

        <>



            {response ? response.map((item) => (
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">" {item.clientName}</h5>
                        {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                        <p class="card-text">{item.comments} "</p>
                        {/* <a href="#" class="card-link">Card link</a>
                     <a href="#" class="card-link">Another link</a> */}
                    </div>
                </div>

                // <table className='table table-dark'>
                //     <tbody>
                //         {(
                //             <tr>
                //                 <td > </td>
                //                 <td > {item.comments}</td>
                //             </tr>
                //         )}</tbody>
                // </table>

            )) : <h1>no data received</h1>}
            <h1>Add comment</h1>
            <div class="form-floating">
                {/* <label for="floatingTextarea2">Comments</label> */}
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <br></br>
            <br></br>
            <button onClick={(e) => {
                e.preventDefault()
                Submit()
            }} > Submit</button>
        </>
    )


}
export default Comments;