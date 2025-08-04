import { useState, useEffect, useContext } from 'react'
import './events.css'

import {EVENT_CODE_CONTEXT} from "../contexts.js"


function Events() {

    const [events, setEvents] = useState(null)
    const {eventCode, setEventCode} = useContext(EVENT_CODE_CONTEXT)


    let query = `query($eventsSearchSeason2: Int!) {
        eventsSearch(season: $eventsSearchSeason2) {
            name
            code
        }
        }`

    let variables = {"eventsSearchSeason2": 2024}

    useEffect(() => {
        const url = "https://api.ftcscout.org/graphql"

        fetch(url, {method: "POST", headers: {Accept: "application/json", "Content-Type": "application/json"}, body: JSON.stringify({ query, variables })})
        .then(result => {
            if (!result.ok) {throw new Error()}
            else return result.json()
        })

        .then(data => {
            setEvents(data.data.eventsSearch)
        })

        // catch errors

    }, [])

    function parseEvents() {
        if (!events) {return null}
        else {return events.map(event => <option value={event.code}>{event.name}</option>)};
    }


    function selectionChange(event) {
        console.log(event.target.value)
        setEventCode(event.target.value)
        console.log("Event Code " + eventCode)
    }



  return (
    <div className="events">

        <select  id="events" onChange={selectionChange} className="div-style">
            <option>Select an Event</option>
            {parseEvents()}
        </select>
      
    </div>
  )
}

export default Events
