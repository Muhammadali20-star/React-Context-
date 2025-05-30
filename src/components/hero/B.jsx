import React, {useContext} from 'react'
import { Context } from './Hero'
import C from './C';

const B = () => {
    const nimadur = useContext(Context)
    
    return (
    <div>
        <h2>text</h2>
        <p>{nimadur.str}</p>
        <C/>
    </div>
  )
}

export default B