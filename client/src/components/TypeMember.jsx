
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


        navigate(`/${id}/${firstName}/${lastName}/${email}/${fhone}/${TypeMember}`);
    };

    return (<>

        <h1>choose your Training package</h1>
        <div style={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center', flexDirection: 'column' }}>
        {response ? response.map((item, index) => (
            <table >
                <tbody>
                    <tr>
                        <div class="card text-center" style={{ border: '1px solid #3498db',  width: '500px', margin: '100px auto' }}>
                            <div class="card-header">
                            {item.type}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{item.monthlyPayment}€ </h5>
                                <p class="card-text">{item.description}</p>
                                <a href="#" class="btn btn-primary" onClick={(e) => {
                                    e.preventDefault()
                                    handleSubmit(item.id)
                                }} >for payment</a>
                            </div>
                            <div class="card-footer text-body-secondary">
                            {item.type}
                            </div>
                        </div>
                    </tr>
                    {/* <tr>{(

                        <button onClick={(e) => {
                            e.preventDefault()
                            handleSubmit(item.id)
                        }} name="IdTypeMember" >{item.type}</button>
                    )} </tr> */}
                </tbody>
            </table>

        )) : <h1>no data received</h1>}
        </div>

        {/* <button onChange={() => setNumOfChoose(2)}>Trial lesson</button>
    <button onChange={() => setNumOfChoose(3)}>VIP</button>
    <button onChange={() => setNumOfChoose(4)}>primum</button> */}






    </>)

}
export default typeMember(TypeMember)
