import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepApp } from './components/FirstStepApp'
import MyAwesomeApp from './components/MyAwesomeApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>,
)
