import { fetchData } from '../../api'
import { fetchCountries } from '../../api'
// import { data } from '../ducks/dataReducer'
// import { countries } from '../ducks/countryReducer'
import { data, countries } from '../ducks'

export const fetchApiData = (country) => {
    return async(dispatch) => {
        dispatch(data(await fetchData(country)))
    }
}

export const fetchCountriesData = () => {
    return async(dispatch) => {
        dispatch(countries(await fetchCountries()))
    }
}