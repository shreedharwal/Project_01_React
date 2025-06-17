// Axios is a popular JavaScript library used for making HTTP requests 
// from web browsers or Node.js. It simplifies the process of sending asynchronous HTTP requests 
// to a server and handling the response, particularly with its support for promises.
// Axios is known for its user-friendly API, automatic JSON data transformation, request/response interceptors,
// and ability to cancel requests. 
// Axios utilizes Promises, making asynchronous operations cleaner and easier to manage. 
// Axios automatically handles the conversion of JSON data to JavaScript objects and vice versa, simplifying data handling. 
// Axios enables you to cancel ongoing requests, which is useful for managing situations where a user navigates away from a page before a request completes. 
// Axios allows you to intercept requests before they are sent and responses before they are handled, enabling tasks like adding authentication tokens or logging requests. 

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")


  async function generateAnswer() {
    setAnswer("loading...")
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAucIOMAk_DyTfzSsRG6f8WFHT6Nec_LS4",
      method: "post",
      data: {
        "contents": [
          {
            "parts": [
              {
                "text": question
              }
            ]
          }
        ]
      }
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }


  // Auto-scroll effect to bring response into view
  useEffect(() => {
    if (answer) {
      document.getElementById("chat-response").scrollIntoView({ behavior: "smooth" });
    }
  }, [answer]);


  return (
    <div classname="chat-container">
      <h1 classname='chat-title'>Chat AI</h1>
      <div className="chat-box">

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything..."
          cols="40" rows='15'
          className="chat-input"
        />
        <button onClick={generateAnswer} className='chat-button'>Generate</button>
      </div>
      <div id="chat-response" className="chat-response">
        {answer && <p className="response-text">{answer}</p>}
      </div>
    </div>
  )
}

export default App
