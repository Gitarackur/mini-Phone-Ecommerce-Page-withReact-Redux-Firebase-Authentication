import productsReducer from './productsReducer'
import authReducer from './authReducer'
import cartReducer from './CartReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer= combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer
})







export default rootReducer;