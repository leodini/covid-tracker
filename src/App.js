import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchApiData } from './store/fetchActions'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'


function App() {
  const [ country, setCountry ] = useState('')
  
  const data = useSelector(state => state.dataReducer.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchApiData())
    console.log(data)
  }, [])

  const handleCountryChange = async(country) => {
    dispatch(fetchApiData(country))
    setCountry(country)
  }
 
  return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
  );
}

export default App;
