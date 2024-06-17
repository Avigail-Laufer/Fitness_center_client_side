import { click } from "@testing-library/user-event/dist/click"
import React, { createElement, useEffect, useState } from "react"
const BasicTrainingComponent = (OriginComponent) => {

return function BasicTraining() {
    const [isTrue, setIstrue] = useState(false)
    const [response, setResponse] = useState(null)
    const [hover, setHover] = useState(false);
    debugger
    const [imageUrl, setImageUrl] = useState(null); 
    function arrayBufferToBase64(buffer) {
        let binary = '';
        let bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
    const onMouseOverCaptureHandler = (item) => {
        setHover(item.purposeOfTraining);
    };

    useEffect( () => {
        const fetchData = async () => {
            const url = "http://localhost:5168/api/training"
            const response = await fetch(url)
            const responseJson=await (response.json())
            setResponse(responseJson)
            debugger
            const base64Image = arrayBufferToBase64(responseJson[0].imageBytes); // Assuming the binary image data is in the field 'imageData'
            debugger
            setImageUrl(`data:image/jpeg;base64,${base64Image}`); // Adjust the MIME type according to your image type
            
    
        
        }

        fetchData()
    }, [])
    return <OriginComponent response = {response}></OriginComponent>
       
          
}
    

  
 }
 export default BasicTrainingComponent;