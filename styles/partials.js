/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

import { under768 } from './mediaQueries'
 
export const topLine = css`
  border-top: 1px solid black;
  margin-top: 50px;
`

export const cardShape = css`
  border-bottom: 1px solid grey;
  padding: 20px;

  ${under768} {
    :last-of-type {
      border-bottom: none;
    }
  }
`

export const sectionLabel = css`
  font-family: Arial;
  font-weight: normal;
  font-size: 60%;
  margin: 0;
  margin-top:2px;
`

export const sectionHead = css`
  font-family: Computer-Modern;
  font-weight: normal;
  font-size: 150%;
  margin: 0;
`

export const articleHead = css`
  font-family: Computer-Modern;
  font-weight: normal;
  font-size: 200%;
  margin: 0;
  margin-top: 50px;
`

export const articleSubHead = css`
  font-weight: normal;
  font-family: Computer-Modern;
  width: fit-content;
  font-size: 150%;
  margin-top: 2.5rem;
  margin-bottom: -.5rem;
`

export const cardHead = css`
  font-family: Computer-Modern;
  font-weight: normal;
  margin: 0;
  font-size: 117%;
  width: fit-content;
  :hover {
    color: blue;
  } 
`

export const sectionText = css`
  font-family: Computer-Modern;
  font-size: 80%;
  margin: 0;
`
export const articleText = css`
  width: 80%;
  font-family: Computer-Modern;
`

export const summary = css`
  font-weight: normal;
  font-family: Computer-Modern;
  font-size: 117%;
  border-bottom: 1px dashed grey;
  width: fit-content;
  margin-top: 50px;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
  }
`

export const techieLink = css`
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 90%;
  :hover {
    color: blue;
  }
`

export const refinedLink = css`
  color: blue;
  :hover {
    text-decoration: underline;
  }
`