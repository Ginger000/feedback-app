import React from "react";
// import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import * as ReactDOMClient from 'react-dom/client';

//ReactDOMClient.createRoot(/*...*/);

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>, 
//     document.getElementById('root'))
const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<App/>)