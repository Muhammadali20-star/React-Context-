import React, { createContext } from 'react'
import A from './A'

export const Context = createContext()

const Hero = () => {
    let str = "hello world"
  return (
    <div className='container mx-auto'>
        <h2>Hero</h2>
        <Context.Provider value={{str, price: 250, data: []}}>
            <A />
        </Context.Provider>

    </div>
  )
}

export default Hero