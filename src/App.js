import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

function App() {
  const [ data, setData ] = useState({})

  useEffect(() => {
    const apiCall = async () => {
      let response = await fetchData()
      setData(response)
    }
    apiCall()
  }, [])
 
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
