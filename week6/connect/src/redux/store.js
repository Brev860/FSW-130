import {createStore} from 'redux'
import {userReducer} from './reducers/contact'

const fullStore = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

export default fullStore