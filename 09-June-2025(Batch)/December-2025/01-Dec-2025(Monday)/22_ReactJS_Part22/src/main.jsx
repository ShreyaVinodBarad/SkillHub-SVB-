import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { reduxStore } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>,
    {/* 
    👆
    - The <Provider> makes the Redux store available to all React components.
    - Without this, components cannot access Redux state.
    */}
  </StrictMode>
)
/*
👆
How to use Redux in React?
- Wrap App's Component in Provider Fragment. 
- Using store Attribute import the variable having data - createStore(bankReducer) from store.js file. 
- Variable is reduxStore.
*/ 