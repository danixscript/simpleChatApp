import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Loader from './reducers/LoaderReducer'
import colorReducer from './reducers/colorReducer'
import ErrorReducer from './reducers/errReducer'


const reducer = combineReducers({
    Loader: Loader,
    color:colorReducer,
    err:ErrorReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store