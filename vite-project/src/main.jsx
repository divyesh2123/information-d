import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import HomeMy from './HomeMy.jsx'
import ReadMore from './ReadMore.jsx'
import ExampleRef from './ExampleRef.jsx'
import StudentForm from './StudentForm.jsx'
import Counter from './Counter.jsx'
import MyMain from './MyMain.jsx'
import MyReducerExample from './MyReducerExample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ReadMore text="This is the javascript This is the javascript  This is the javascript This is the javascript This is the javascript This is the javascript" />
     */}
     <MyReducerExample/>
  </StrictMode>,
)
