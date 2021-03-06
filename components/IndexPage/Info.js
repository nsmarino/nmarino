/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

import { under768 } from 'styles/mediaQueries'

import Image from 'next/image'
import { sectionHead, sectionLabel, sectionText, refinedLink, topLine } from 'styles/partials'

export default function Info() {
  return (
    <section css={styles}>
      <h2>Info</h2>
      <div className="selfie">
      <Image
        width={768}
        height={1024}
        quality={100}
        src={'/aero.jpg'}
        alt={'at aerobed'}
      />
      </div>
        <h1>Nicholas Marino</h1>
        
          <p>Welcome to my page! I am a web developer based in Brooklyn, NY. I work with React, Node, and TypeScript to create websites and apps that are reliable and engaging. In my free time I experiment with game design and generative art. Email me at <a href="mailto: contact@nmarino.dev">contact@nmarino.dev</a> if you'd like to work together, or find me on <a href="https://twitter.com/yard__">twitter</a> or <a href="https://github.com/nsmarino">github</a>.</p>
    </section>
  )
}

const styles = css`
${topLine}
flex: 1 0 150px;
margin: 50px;
h1 {
  ${sectionHead}  
  margin-bottom:2px;
  margin-top:2px;
}
.selfie {
  width: 50%;
  font-size:0;
  padding-top:20px;

}
h2 {
  ${sectionLabel}
}
p {
  ${sectionText}
}

.transitionControl {
  padding-top:20px;
}
a {
  ${refinedLink}
}

${under768} { 
  margin: 25px; 
  margin-bottom: 0px;
  /* h2 {
    display: none;
  } */
  .selfie {
    width:  33%;
    font-size:0;
    /* padding-top:25px;
    padding-bottom: 25px; */
  }   
}
`