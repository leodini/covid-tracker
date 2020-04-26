import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './ducks/dataReducer'

export default configureStore({
    reducer: {
        dataReducer
    }
})


