import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { reducer as ProductReducer } from "./ProductReducer/reducer"
import { reducer as AuthReducer } from "./AuthReducer/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    ProductReducer,
    AuthReducer

})

export const store =legacy_createStore(rootReducer,applyMiddleware(thunk))