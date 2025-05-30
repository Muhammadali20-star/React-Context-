import React, { useState, useReducer } from 'react'

const initialState = {
  count: 1,
  username: "",
  wishlist: []
}
const reducer = (state, action) => {
  switch(action.type){
    case "INC":
      return {...state, count: state.count + action.payload}
    case "DEC":
      return {...state, count: state.count - 1}
    case "USERNAME":
      return {...state, username: "LAYLO"}
    default:
      return state
  }
} 
const C = () => {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer , initialState)

  return (
    <div>
      <h2>useState: {count}</h2>
      <button onClick={()=> setCount(p => p + 1)}>increment</button>

      <h2>useReducer: {state.count}</h2>
      <button onClick={()=> dispatch({type: "INC", payload: 1})}>incerement 1</button>
      <button onClick={()=> dispatch({type: "INC", payload: 10})}>incerement 10</button>
      <button onClick={()=> dispatch({type: "INC", payload: 100})}>incerement 100</button>
      <button onClick={()=> dispatch({type: "DEC"})}>decrement</button>
      <button onClick={()=> dispatch({type: "USERNAME"})}>asdsad</button>
    </div>
  )
}

export default C