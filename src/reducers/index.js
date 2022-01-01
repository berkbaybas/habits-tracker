import { combineReducers } from 'redux'
import habitReducer from './habitReducer'

export const rootReducer = combineReducers({
  habit: habitReducer
})
