import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";                      
import axios from "axios";
export default function ContactUs() {
    const navigate = useNavigate(); 


    // State to store the form data
    const [formData, setFormData] = useState({
        id: "",
        IdTypeMember: 1,
        firstName: "",
        lastName: "",
        email: "",
        fhone: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to submit the form data using Axios
    const handleSubmit =(e) => {
        
            // Converting the formData object to a query string for navigation
            
        
            navigate(`/TypeMember/${formData.id}/${formData.firstName}/${formData.lastName}/${formData.email}/${formData.fhone}`); // Navigating to '/TypeMember' with query string
        
        
        // navigate(`/TypeMember/${formData}`);    
        // e.preventDefault();
        // await axios.post("http://localhost:5168/api/client", formData)
        
        //     .then(response =>{ 
               
        //          navigate(`/Login`)
        //          console.log("Post created:", response.data)
        //     }          
        //          )
        //     .catch(error => console.log(error))

    };




    return (

        //   <input type="text" onChange={e => setData({...data, name: e.target.value})} />




        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input maxLength={9}   type="number" name="id" value={formData.id} onChange={handleChange} />
            </label>
            <br />
        
            <label>
                FirstName:
                <input required="true" type="text" name="firstName" value={formData.firstName} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                LastName:
                <input required="true" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
            <br />
            <label>
                Phone:
                <input required="true" type="number" name="fhone" value={formData.fhone} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br/>
            {/* <br />
            <label>
                BirthDate:
                <input type="text" name=" BirthDate" value={formData.BirthDate} onChange={handleChange} />
            </label>
            <br /> */}
            <button type="submit" class="btn btn-outline-primary" >Add Post</button>
        </form>




    )


}
