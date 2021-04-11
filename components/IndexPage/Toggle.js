/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

import { useContext } from 'react'
import { TransitionContext } from 'pages/_app'

export default function Toggle() {
  const [transition, setTransition] = useContext(TransitionContext)

  return (
    <div>
      <button 
        css={transition ? notActive : active} 
        onClick={()=>setTransition(false)}
      >off</button>

      <button 
        css={transition ? active : notActive} 
        onClick={()=>setTransition(true)}
      >on</button>
    </div> 
  )
}

const active = css`
border: 1px solid grey;
font-family: monospace;
color: white;
background: blue;
width: 3rem;

:hover {
  background: darkblue;
}
`
const notActive = css`
border: 1px solid grey;
font-family: monospace;
color: grey;
background: white;
width: 3rem;

:hover {
  background: lightgray;
}
`