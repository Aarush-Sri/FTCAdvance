import { useState } from 'react'
import './team.css'

function Team(props) {

  return (
    <div className="team div-style">
       <span className="rank">{props.rank}</span> <span className="name">{props.name}</span> <span>{props.number}</span>
    </div>
  )
}

export default Team
