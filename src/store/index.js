import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './ducks/dataReducer'
import countryReducer from './ducks/countryReducer'

export default configureStore({
    reducer: {
        dataReducer,
        countryReducer
    }
})


