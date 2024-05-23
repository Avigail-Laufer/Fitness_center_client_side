import { useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";                     
import axios from "axios";

export default function TypeMember(props) {
   
    const { clientsDetails } = useParams();
    const { id, firstName, lastName, email, phone } = clientsDetails;
    const numOfChoose=clientsDetails
    const [IdTypeMember, setIdTypeMember] = useState();

    const [formData, setFormData] = useState({
        id:clientsDetails.id,
        IdTypeMember: IdTypeMember,
        firstName: clientsDetails.firstName,
        lastName: clientsDetails.lastName,
        email: clientsDetails.email,
        fhone: clientsDetails.fhone,
    });
    const navigate = useNavigate(); 
    
    const handleSubmit =async(e) => {
debugger
      e.preventDefault();
       setIdTypeMember(1);
        await axios.post("http://localhost:5168/api/client", formData)
        
            .then(response =>{ 
               
                 navigate(`/Login`)
                 console.log("Post created:", response.data)
            }          
                 )
            .catch(error => console.log(error))

    };


    return(<>
    <h1>choose your Training package</h1>
    
    <button  onClick={handleSubmit} name="IdTypeMember" onChange={()=>setIdTypeMember(1)}>freeDom</button>
    {/* <button onChange={() => setNumOfChoose(2)}>Trial lesson</button>
    <button onChange={() => setNumOfChoose(3)}>VIP</button>
    <button onChange={() => setNumOfChoose(4)}>primum</button> */}
    
 

     
    
    
        </>)
    
    }
    