import React, { createElement, useEffect, useState } from "react"
const BasicTypeTrainingComponent = (OriginComponent) => {

return function BasicTypeTraining() {
    const [isTrue, setIstrue] = useState(false)
    const [response, setResponse] = useState(null)
    const [hover, setHover] = useState(false);

   
    useEffect( () => {
        const fetchData = async () => {
            const url = "http://localhost:5168/api/typemember"
            const response = await fetch(url)
            const responseJson=await (response.json())
            setResponse(responseJson)
        
        
        }

        fetchData()
    }, [])
    return <OriginComponent response = {response}></OriginComponent>
       
          
}
    

  
 }
 export default BasicTypeTrainingComponent ;