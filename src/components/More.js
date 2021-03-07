import React from 'react'



const More = ({ current, forecast }) => {

    const forecasts = forecast?.forecastday.map((val, i) => {
        return (
            <div className="h-40 w-36 border-solid rounded-md border-4 border-light-blue-500 p-2 text-center text-white" key={i}>
                <p className="mt-2">{val?.date}</p>
                <div className="mx-10 mt-4">

                    <img height="36" width="36" src={val?.day?.condition?.icon} alt="weather" />
                </div>
                <div className="relative pt-1 p-4 mt-6">
                    <div className="flex mb-2 items-center justify-between gap-2">
                        <div className="text-left">{val?.day?.maxtemp_c}°C</div>
                        <div className="text-right">{val?.day?.mintemp_c}°C</div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="p-5 bg-gray-800" style={{ height: "100vh" }}>
            <div className="main-temp container">
                <div className="p-3 flex justify-center mt-20 gap-7">

                    {forecasts}

                </div>
                <div className="p-3 flex my-2">
                    <h1 className="text-xl text-white ml-24">Today's Highlights</h1>
                </div>

                <div className="p-3 flex justify-center gap-40 ">
                    <div className="h-36 w-72 border-solid rounded-md border-4 border-light-blue-500 p-2 text-center text-white">
                        <p className=" mt-2">Wind Status</p>
                        <span className="text-5xl" >{parseInt(current?.wind_kph || "5", 10)} </span><p className="text-xl">kph</p>
                    </div>

                    <div className="h-36 w-72 border-solid rounded-md border-4 border-light-blue-500 p-2 text-center text-white">
                        <p className=" my-2">Humidity</p>
                        <span className="text-3xl" >{current?.humidity || 40}%</span>
                        <div className="relative pt-1 p-4 -my-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div className="text-left">
                                    <span className="text-xs font-semibold inline-block text-pink-600">
                                        0%
                                </span>
                                </div>
                                <div className="text-center">
                                    <span className="text-xs font-semibold inline-block text-pink-600">
                                        50%
                                </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-pink-600">
                                        100%
                                </span>
                                </div>

                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">

                                <div style={{ width: `${current?.humidity || 40}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-3 flex justify-center gap-40">
                    <div className="h-36 w-72 border-solid rounded-md border-4 border-light-blue-500 p-2 text-center text-white">
                        <p className="my-4">Visibility</p>
                        <span className="text-4xl">{current?.vis_km || "5"}</span> Kilometers
                    </div>

                    <div className="h-36 w-72 border-solid rounded-md border-4 border-light-blue-500 p-2 text-center text-white">
                        <p className="my-4">Air Pressure</p>
                        <span className="text-4xl">{parseInt(current?.pressure_mb || 10, 10)}</span> mb
                    </div>
                </div>

            </div>
        </div>
    )
}

export default More
