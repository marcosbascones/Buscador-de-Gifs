import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'

//Se toma el div con id root y se renderiza el GifExpertApp
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <GifExpertApp />
  //</StrictMode>
)
