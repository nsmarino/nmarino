import Link from 'next/link'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { cardHead, cardShape, sectionText } from '../styles/partials'

export default function BlogCard( { blog }) {
  return (
    <Link href={`blog/${blog.slug}`}>
    <div css={styles}>
      <div className="postInfo">
        <p>{blog.date}</p>
        <p>{blog.wordCount} words</p>
      </div>
      <h3>{blog.title}</h3>
      <p>{blog.desc}</p>    
    </div>
    </Link>
  )
}

const styles=css`
  ${cardShape}
  cursor: pointer;

  .postInfo {
    display: flex;
    justify-content: space-between;
      p {
        font-family: Arial;
        font-size: 60%;
        opacity: 0.6;
        padding-bottom: 5px;
      }
  }

  h3 {
    ${cardHead}
  }

  p {
    ${sectionText}
  }

  :hover {
    h3 {
      color: blue;
    }
  }
`