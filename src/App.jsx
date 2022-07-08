import useWeather from './hooks/useWeather'
import './App.css'
import CardLoader from './components/CardLoader'
import CardWeather from './components/CardWeather'
import { useEffect, useState } from 'react'


function App() {

  const { weatherData, loading } = useWeather()
  const [changeBack, setChangeBack] = useState('clearSky')

  useEffect(() => {
    if (weatherData?.weather[0].description.includes('scattered clouds')) {
      setChangeBack('clearSky')
    } else if (weatherData?.weather[0].description.includes('few clouds')) {
      setChangeBack('sunImage')

    }

  }, [weatherData])




  return (
    <div className={`backgd ${changeBack}`}>
      <div className='insidecard'>
        {
          loading ?
            <CardLoader />
            :
            <CardWeather
              weather={weatherData}

            />
        }

      </div>
    </div>
  )
}

export default App
