import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import { ArteDeCafeApp } from './ArteDeCafeApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    < ArteDeCafeApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
