import { click } from "@testing-library/user-event/dist/click"
import React, { createElement, useEffect, useState } from "react"
import training from "./BasicTraining"
import img from "../logo.svg"
import './homeTraining.css'

function HomeTraining(props) {


    const [isTrue, setIstrue] = useState(false)
    const [response, setResponse] = useState([])
    const [hover, setHover] = useState(false);


    useEffect(() => {
        setResponse(props.response)
    })

    const onMouseOverCaptureHandler = (item) => {
        setHover(item.purposeOfTraining);
    };


    return (
        <>
           <div class="style" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {response ? response.map((item, index) => (
                <table>
                    <td>
                        <div class="d-flex flex-row mb-3">
                            <div class="p-2">
                                {/* <div class="row row-cols-1 row-cols-md-3 g-4" > */}
                                    <div class="col" >
                                        <div class="card" >
                                            <img src="https://www.cardiosport.co.il/wp-content/uploads/2018/11/%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99-%D7%9B%D7%95%D7%A9%D7%A8.jpg" class="card-img-top" alt="..."></img>
                                            {/* <img src="..." class="card-img-top" alt="..."> */}
                                            <div class="card-body">
                                                <h5 class="card-title"  onMouseOver={() => onMouseOverCaptureHandler(item)}>{item.name}</h5>
                                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </td>
                </table>

            )) : <h1>no data received</h1>}
            <h1 id="purposeOfTraining">{hover}</h1>
            </div>
        </>
    )


}
export default training(HomeTraining);