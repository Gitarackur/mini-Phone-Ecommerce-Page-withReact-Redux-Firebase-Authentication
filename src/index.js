import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './components/Reducers/rootReducer';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase'
import firebase from './Config/firebaseConfig';
// import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'




function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div id="preloader"><div id="loader"></div></div>;
  return children
}


const store= createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})),)

  const rrfProps={
    firebase,
    config: {
      userProfile: "Users",
      useFirestoreForProfile: true,
      enableLogging: false
    },
    dispatch: store.dispatch,
    createFirestoreInstance
  }

 


    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
          </ReactReduxFirebaseProvider>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
