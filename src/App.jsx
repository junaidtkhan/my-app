import { useState } from 'react'
import './App.css'
import { FormPage } from './Components/Form'

function App() {
  // const [count, setCount] = useState(0)
  const [formPage, setFormPage] = useState(false)

  return (
    <div className='app'>
      {!formPage ? (
        <div
        style={{
          position: "absolute",
          top: "15%",
          left: "35%",

        }}
        >
          {/* <img src="../public/MTD_Logo.jpg" alt="" /> */}
          <h2>
            Welcome to MTD House of Water
          </h2>
          <button
          style={{
            marginTop: "1rem",
            backgroundColor: "#fff",
            color: "#000",
          }}
            onClick={() => {
              setFormPage(true)
            }}>
            Click to Start
          </button>
        </div>
      ) :
        <FormPage setFormPage={setFormPage} />
      }
    </div>
  )
}

export default App
