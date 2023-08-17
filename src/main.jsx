// import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App.jsx"
// import "./index.css"
import { BrowserRouter } from "react-router-dom"
import Student from "./components/Student.jsx"

console.log(import.meta.env.VITE_API_HOST)

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* <Student /> */}
  </BrowserRouter>
)
