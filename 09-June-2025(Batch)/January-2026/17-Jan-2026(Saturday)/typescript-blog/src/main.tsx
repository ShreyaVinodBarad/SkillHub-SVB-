import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { Provider } from 'react-redux'
import reduxStore from "./../redux/store.js"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={reduxStore}>
      {/* 
      👆
      - Provider comes from React-Redux.
      - It is used to connect Redux store with your React app.
      => What is store={reduxStore}?
      - This passes your Redux store to the whole app.
      - Now all components can access data from Redux.
      */}
      <App />
      {/* 
      👆
      => What is <App /> inside Provider?
      - Your main app component is wrapped inside Provider.
      - So every component inside App can use Redux.
      */}
    </Provider>
  </StrictMode>,
)
