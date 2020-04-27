import { configureStore } from '@reduxjs/toolkit'
import { dataReducer, countryReducer } from './ducks'

export default configureStore({
    reducer: {
        dataReducer,
        countryReducer
    }
})


