import React, { useState } from 'react'
import axios from 'axios';

const Main = ({ location, current }) => {

    const [searchlocation, setLocation] = useState("")
    const BASE_SEARCH_URL = `http://api.weatherapi.com/v1/search.json?`


    function onHandleChange(e) {
        setLocation(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = await axios.get(`${BASE_SEARCH_URL}key=${process.env.REACT_APP_WEATHER_AUTH_KEY}&q=${searchlocation}`)
        console.log(data.data)
    }

    return (
        <div className="bg-weather sm:bg-fixed" style={{ height: "100%" }}>
            <div className="container p-2">
                <div className=" grid grid-cols-4 grid-flow-row">
                    <div className="col-span-4">
                        <h1 className="text-5xl text-center mt-4 text-white">
                            Weather App
                        </h1>
                    </div>
                    <div className="col-span-0">

                    </div>

                </div>
            </div>
            <div className="main-temp container text-white">
                <div className="p-5 flex justify-center mt-20 ">
                    <img src={current?.condition?.icon} alt="Weather" height="100" width="100" />
                </div>
                <div className="p-5 flex justify-center mt-4">
                    <strong className="text-purple-300 text-8xl">{current?.temp_c || "40"}°</strong><br /><br /><br /> C
                </div>
                <div className="p-5 flex justify-center mt-6">
                    <strong className="text-black-500 text-xl">{current?.condition?.text}</strong>
                </div>
                <div className="p-5 flex justify-center mt-4">
                    <strong className="text-black-500 text-xl">Today . {location?.localtime || "2021-03-07: 07:06"}</strong>
                </div>
                <div className="p-5 flex justify-center mt-2">
                    <strong className="text-black-500 text-xl">{location?.name || "Helsinky"}</strong>
                </div>
            </div>
        </div>
    )
}

export default Main
