import { fetchData } from '../../api'
import { data } from '../ducks/dataReducer'

export const fetchApiData = (country) => {
    return async(dispatch) => {
        dispatch(data(await fetchData(country)))
    }
}