import { useEffect, useState } from 'react'
import './App.css'
import Leaderboard from "./leaderboard/leaderboard"
import Events from "./events/events"
import Awards from "./awards/awards"

import {EVENT_CODE_CONTEXT} from "./contexts"

function App() {

  const [eventCode, setEventCode] = useState("FTCCMP1FRAN")


  useEffect(() => {
    const fakeCursors = document.getElementById("fake-cursor")

      function moveCursor(cursor) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight

        cursor.style.transition = "transform 3s ease"
        cursor.style.transform =   `translate(${x}px, ${y}px)`
      }

      setInterval(() => moveCursor(fakeCursors), 3000)
  })

  return (
    <div className="main">
        {/* <EVENT_CODE_CONTEXT.Provider value={{eventCode, setEventCode}}>
    
          <div className="header">
            <Events/>
          </div>

          <div className="data">
            <Leaderboard/>
            <Awards/>

          </div>
        </EVENT_CODE_CONTEXT.Provider> */}

        <img src="../public/secret_bg.png" alt="" />

          <div id="fake-cursor">

            <img src="/cursor.svg" alt="" />

          </div>

          <div className="dev div-style">
            <span>FTCAdvance&copy; is still in development! </span>
            
              <span style={{fontSize: ".8rem"}}>Check back after the FTC 2025-2026 Decode&copy; season reveal for more updates!</span>
          </div>
      

    </div>
  )
}

export default App
