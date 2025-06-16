// Axios is a popular JavaScript library used for making HTTP requests 
// from web browsers or Node.js. It simplifies the process of sending asynchronous HTTP requests 
// to a server and handling the response, particularly with its support for promises.
// Axios is known for its user-friendly API, automatic JSON data transformation, request/response interceptors,
// and ability to cancel requests. 
// Axios utilizes Promises, making asynchronous operations cleaner and easier to manage. 
// Axios automatically handles the conversion of JSON data to JavaScript objects and vice versa, simplifying data handling. 
// Axios enables you to cancel ongoing requests, which is useful for managing situations where a user navigates away from a page before a request completes. 
// Axios allows you to intercept requests before they are sent and responses before they are handled, enabling tasks like adding authentication tokens or logging requests. 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  async function generateAnswer() {
    console.log("loading...")
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAucIOMAk_DyTfzSsRG6f8WFHT6Nec_LS4",
      method: "post",
      data: {
        "contents": [
          {
            "parts": [
              {
                "text": "Explain how AI works in a few words"
              }
            ]
          }
        ]
      }
    });
    console.log(response)
  }
  return (
    <>
      <h1>Chat AI</h1>
      <button onClick={generateAnswer}>Generate Ans</button>
    </>
  )
}

export default App
