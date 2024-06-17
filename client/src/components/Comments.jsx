
import React, { createElement, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useStateValue } from './Context';
import CommentObserver from "./CommentObserver";
import './Comments.css';

import profhil from '../images/p.jpg';
import sher from '../images/imagepink.png';



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
            <div className="content">
                <div class="comment-container theme--light">
                    <div class="comments" >
                        <div class="card v-card v-sheet theme--light elevation-2" >
                            <span class="headline" >Add comment</span>
                            <div class="form-floating">
                                {/* <label for="floatingTextarea2">Comments</label> */}
                                <br></br>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => setComment(e.target.value)}></textarea>
                                <br></br>
                                <br></br>
                                <button class="btn btn-3" onClick={(e) => {
                                    e.preventDefault()
                                    Submit()
                                }} > Submit</button>

                            </div>
                        </div>
                    </div  >
                </div>
            </div>



            {response ? response.map((item) => (
                    <div class="comment-container theme--light">
                        <div class="comments" >
                            <div class="card v-card v-sheet theme--light elevation-2" >
                                <div class="v-avatar avatar" ><img src={profhil} /></div>
                                <span class="headline" >{item.clientName}</span>
                                <div class="sign-in-wrapper" >
                                    <p class="caption disclaimer" >{item.comments}</p>
                                    <p class="error-message" ></p>
                                </div>

                            </div>
                        </div  >
                    </div>
                )) : <h1>no data received</h1>
            }




        </>
    )


}

export default Comments;