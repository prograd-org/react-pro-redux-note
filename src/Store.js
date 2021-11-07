import Reducer from "./Reducer";
import {
    combineReducers
} from "redux";

const rootReducer = combineReducers({
    Reducer: Reducer
})

export default rootReducer;