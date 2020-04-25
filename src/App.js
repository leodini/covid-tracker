import React, { useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'

function App() {

  useEffect(() => {
    const data = async () => {
      let response = await fetchData()
      console.log(response)
    }
    data()
  }, [])

  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
