import { click } from "@testing-library/user-event/dist/click"
import React, { createElement, useEffect, useState } from "react"
const BasicTrainingComponent = (OriginComponent) => {

return function BasicTraining() {
    

    const [isTrue, setIstrue] = useState(false)
    const [response, setResponse] = useState(null)
    const [hover, setHover] = useState(false);

    const onMouseOverCaptureHandler = (item) => {
        setHover(item.purposeOfTraining);
    };

    useEffect( () => {
        const fetchData = async () => {
            const url = "http://localhost:5168/api/training"
            const response = await fetch(url)
            const responseJson=await (response.json())
            setResponse(responseJson)
        
        
        }

        fetchData()
    }, [])
    return <OriginComponent response = {response}></OriginComponent>
       
          
}
    

  
 }
 export default BasicTrainingComponent;