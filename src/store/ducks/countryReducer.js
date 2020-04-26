import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    countries: []
}

export const countries = createAction('COUNTRIES')

export default createReducer(INITIAL_STATE, {
    [countries.type]: (state, action) => ({ ...state, countries: [...state.countries, action.payload]})
})