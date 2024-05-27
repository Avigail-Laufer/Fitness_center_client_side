import { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TypeMember(props) {

    const { id } = useParams();
    const { firstName } = useParams();
    const { lastName } = useParams();
    const { email } = useParams();
    const { fhone } = useParams();
    const [TypeMember, setIdTypeMember] = useState(null);
    const [formData, setFormData] = useState({
        id: id,
        IdTypeMember:1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        fhone: fhone,
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
       
        e.preventDefault();
       
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

        <button onClick={handleSubmit} name="IdTypeMember" >freeDom</button>
        {/* <button onChange={() => setNumOfChoose(2)}>Trial lesson</button>
    <button onChange={() => setNumOfChoose(3)}>VIP</button>
    <button onChange={() => setNumOfChoose(4)}>primum</button> */}






    </>)

}
