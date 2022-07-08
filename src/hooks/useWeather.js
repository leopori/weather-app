import axios from "axios"
import { useEffect, useState } from "react"

const useWeather = () => {

    const [coordinates, setCoordinates] = useState()
    const [weatherData, setWeatherData] = useState()
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        const success = pos => {
            const lat = pos.coords.latitude
            const long = pos.coords.longitude
            setCoordinates({ lat, long })
        }
        navigator.geolocation.getCurrentPosition(success)
    }, [])

    useEffect(() => {
        if (coordinates !== undefined) {
            const API_Key = '2a0cabe780439a8682049d860daf2249'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.long}&appid=${API_Key}&units=metric`
            axios.get(URL)
                .then(res => {
                    setWeatherData(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }

    }, [coordinates])

    

    console.log(weatherData);




    return { weatherData, loading }
}

export default useWeather