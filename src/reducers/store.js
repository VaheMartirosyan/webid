import {combineReducers} from "redux"
import reducer from './portfolio/reducer'
import mouseReducer from './mouseMove/reducer'

export default combineReducers( {
    reducer,
    mouseReducer
})