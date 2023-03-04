import React, {useState} from 'react'

export type FilterType = "all" | "active" | "completed";

const Buttons = ({changeFilter}: any) => {

  return (
    <div>
        <button onClick={() => changeFilter("all")}>all</button>
        <button onClick={() => changeFilter("active")}>active</button>
        <button onClick={() => changeFilter("completed")}>completed</button>
  </div>
  )
}

export default Buttons
