import React, { useState } from "react";
import axios from "axios";
export default function ContactUs() {


    // State to store the form data
    const [formData, setFormData] = useState({
        Id: "",
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        BirthDate: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to submit the form data using Axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5168/api/client", formData);
            console.log("Post created:", response.data);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };




    return (

        //   <input type="text" onChange={e => setData({...data, name: e.target.value})} />




        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="number" name="Id" value={formData.Id} onChange={handleChange} />
            </label>
            <br />
            <label>
                FirstName:
                <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                LastName:
                <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} />
            </label>
            <br />
            <label>
                Phone:
                <input type="number" name="Phone" value={formData.Phone} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
            </label>
            <br />
            <label>
                BirthDate:
                <input type="text" name=" BirthDate" value={formData.BirthDate} onChange={handleChange} />
            </label>
            <br />
            <button type="submit"  class="btn btn-outline-primary">Add Post</button>
        </form>




    )


}
