import BlogCard from './BlogCard'

import { under768 } from '../styles/mediaQueries'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { sectionLabel, topLine } from '../styles/partials'

export default function Blogs({ blogs }) {
  return (
    <section css={styles}>
      <h2>Blog</h2>
      {blogs.map(blog=><BlogCard blog={blog} key={blog.slug} />)}
    </section>
  )
}

const styles = css`
  flex: 1 0 150px;
  margin: 50px;

  ${topLine}
  
  h2 {
    ${sectionLabel}
  }
  
  ${under768} { 
    margin-top: 0px;
    h2 {
      font-size: 200%;
      font-family: Computer-Modern;
    }
  }
`
