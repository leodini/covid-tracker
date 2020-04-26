import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    data: {}
}

export const data = createAction('DATA')

export default createReducer(INITIAL_STATE, {
    [data.type]: (state, action) => ({...state, data: action.payload})
})