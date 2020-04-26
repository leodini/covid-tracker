import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountriesData } from '../../store/fetchActions'
import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
    const fetchedCountries = useSelector(state => state.countryReducer.countries)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCountriesData())
        console.log(fetchedCountries)
    }, [dispatch])

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {
                    fetchedCountries[0] ? fetchedCountries[0].map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    )) : null
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker