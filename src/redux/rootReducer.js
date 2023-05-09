import {combineReducers} from 'redux'
import { folderReducer } from './reducer'
export const reducers=combineReducers({
    folderReducer:folderReducer
})