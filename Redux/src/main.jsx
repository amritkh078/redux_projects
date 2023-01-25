import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import userReducer from './features/userSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux' // provider is a component that wraps the app and gives it access to the store

const store = configureStore({
  reducer:{
    user: userReducer
  } 
}) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
