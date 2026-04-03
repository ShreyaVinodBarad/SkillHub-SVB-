import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import reduxStore from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
    {/* 
    👆
    - Provider (from React Redux) is used to connect your whole app with Redux.
    - In simple words:
    Provider = gives Redux store to all components
    store={reduxStore} = your main data (state)
    <App /> = your main app component
    */}
  </StrictMode>,
)