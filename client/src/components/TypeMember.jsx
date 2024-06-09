
import React, { createElement, useEffect, useState } from "react"
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import typeMember from "./BasicTypeMember";

function TypeMember(props) {

    const [response, setResponse] = useState(null)
    const { id } = useParams();
    const { firstName } = useParams();
    const { lastName } = useParams();
    const { email } = useParams();
    const { fhone } = useParams();
    // const [formData, setFormData] = useState({
    //     id: id,
    //     IdTypeMember: TypeMember,
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     fhone: fhone,
    // });
    const navigate = useNavigate();
    useEffect(() => {
        setResponse(props.response)
    })

    const handleSubmit = async (TypeMember) => {

        // event.preventDefault();

        console.log(TypeMember);
        debugger
        const formData = {
            id: id,
            IdTypeMember: TypeMember,
            firstName: firstName,
            lastName: lastName,
            email: email,
            fhone: fhone,
        };

        await axios.post("http://localhost:5168/api/client", formData)

            .then(response => {

                navigate(`/Login`)
                console.log("Post created:", response.data)
            }
            )
            .catch(error => console.log(error))

    };

    return (<>
        <h1>choose your Training package</h1>
        {response ? response.map((item, index) => (
            <table >
                <tbody>
                    <tr>{ (

                        <button onClick={(e) => {
                            e.preventDefault()
                            handleSubmit(item.id)
                        }} name="IdTypeMember" >{item.type}</button>
                    )} </tr>
                </tbody>
            </table>
        )) : <h1>no data received</h1>}

        {/* <button onChange={() => setNumOfChoose(2)}>Trial lesson</button>
    <button onChange={() => setNumOfChoose(3)}>VIP</button>
    <button onChange={() => setNumOfChoose(4)}>primum</button> */}






    </>)

}
export default typeMember(TypeMember)
