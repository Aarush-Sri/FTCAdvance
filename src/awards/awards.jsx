import { useState, useEffect, useContext } from 'react'
import './awards.css'

import {EVENT_CODE_CONTEXT} from "../contexts.js"

function Awards() {
  // const [teams, setTeams] = useState(null)
  // const {eventCode, setEventCode} = useContext(EVENT_CODE_CONTEXT)


  // useEffect(() => {
  //   const url = "https://api.ftcscout.org/graphql"

  //   let query = ``

  //   let variables = {"season": 2024, "code": event}

  //   fetch(url, {method: "POST", headers: {Accept: "application/json", "Content-Type": "application/json"}, body: JSON.stringify({ query, variables })})
  //     .then(result => {
  //       if (!result.ok) {throw new Error()}
  //       else return result.json()
  //     })

  //     .then(data => {
  //       setLoading(false)
  //       setTeams(data.data.eventByCode.teams)
  //     })

  //     // catch errors
  // }, [])




  // function parseEvents() {

  // }



  return (
    <div className="awards">
       <div className="award div-style" id="inspire">
            <div className="title">Inspire Award</div>
            
            <div className="type"> 
              <span>1st</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

            <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

             <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

       </div>


        <div className="award div-style" id="inspire">
            <div className="title">Think Award</div>
            
            <div className="type"> 
              <span>1st</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

            <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

             <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

       </div>


        <div className="award div-style" id="inspire">
            <div className="title">Connect Award</div>
            
            <div className="type"> 
              <span>1st</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

            <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

             <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

       </div>


        <div className="award div-style" id="inspire">
            <div className="title">Innovate Award</div>
            
            <div className="type"> 
              <span>1st</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

            <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

             <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

       </div>


        <div className="award div-style" id="inspire">
            <div className="title">Design Award</div>
            
            <div className="type"> 
              <span>1st</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

            <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

             <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

       </div>


        <div className="award div-style" id="inspire">
            <div className="title">Motivate Award</div>
            
            <div className="type"> 
              <span>1st</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

            <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

             <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

       </div>


        <div className="award div-style" id="inspire">
            <div className="title">Control Award</div>
            
            <div className="type"> 
              <span>1st</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

            <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

             <div className="type"> 
              <span>2nd</span> 
              <select className="div-style">
                <option>Select a team</option>
              </select>
            </div>

       </div>
    </div>
  )
}

export default Awards
