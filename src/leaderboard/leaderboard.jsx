import { useState, useEffect, useContext } from 'react'
import './leaderboard.css'
import Team from "./team/team.jsx"

import {EVENT_CODE_CONTEXT} from "../contexts.js"

function Leaderboard() {

  const [loading, setLoading] = useState(true)
  const [teams, setTeams] = useState(null)
  const {eventCode, setEventCode} = useContext(EVENT_CODE_CONTEXT)



  let event = eventCode
  useEffect(() => {
    const url = "https://api.ftcscout.org/graphql"

    let query = `query($season: Int!, $code: String!) {
        eventByCode(season: $season, code: $code) {
          teams {
            team {
              name
              number
            }
            stats {
              ... on TeamEventStats2024 {
                rank
              }
            }
          }
        }
      }`

    let variables = {"season": 2024, "code": event}

    fetch(url, {method: "POST", headers: {Accept: "application/json", "Content-Type": "application/json"}, body: JSON.stringify({ query, variables })})
      .then(result => {
        if (!result.ok) {throw new Error()}
        else return result.json()
      })

      .then(data => {
        setLoading(false)
        setTeams(data.data.eventByCode.teams)
      })

      // catch errors
  }, [eventCode])




  function parseTeams() {
    let allTeams = []
    
    let sortedTeams = [...teams].sort((team1, team2) => {
      let rank1 = team1.stats ? team1.stats.rank : Infinity
      let rank2 = team2.stats ? team2.stats.rank : Infinity
      return rank1 - rank2
    })


    sortedTeams.forEach(team => {
      allTeams.push(<Team name={team.team.name} number={team.team.number} rank={team.stats != null ? team.stats.rank : null} />)
    });

    return allTeams

  }



  return (
    <div className="leaderboard">
       {loading ? <p>loading</p> : parseTeams()}
    </div>
  )
}

export default Leaderboard
