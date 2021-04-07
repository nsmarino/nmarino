import Link from 'next/link'
import { useRouter } from 'next/router'
import useActiveId from 'hooks/useActiveId'
import slugify from 'utils/slugify'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { sectionLabel, topLine, techieLink } from 'styles/partials'

import { under768 } from 'styles/mediaQueries'

const LinkInTOC = ({heading, active}) => {
  const { query } = useRouter()
  const slug = slugify(heading)

  return (
    <div css={active===slug ? ACTIVE_CSS : LINK_CSS}>
      <Link href={`/blog/${query.id}#${slugify(heading)}`}>{heading}</Link>
    </div>
  )
}

const TOC = ({headings}) => {
  const headingIds = headings.map(heading=>slugify(heading))
  const activeId = useActiveId(headingIds)

  return (
    <nav css={styles}>
      <Link href="/"><span className="navToIndex">« Nicholas Marino</span></Link>

      {headings.map(h=> <LinkInTOC heading={h} key={h} active={activeId} />)}
    </nav>
  )
}

const styles = css`
  ${under768} {
    display: none;
  }

  ${topLine}
    margin: 50px;
    position: fixed;
    top: 0px;
    width: 250px;

  .navToIndex {
    ${sectionLabel}
    color: blue;
    display: block;
    margin-bottom: 50px;
    margin-top: 4px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  a {
    display: block;
    width: fit-content;
    font-family: 'Courier New', Courier, monospace;
    font-size: 80%;
    margin-bottom: 5px;

    :hover {
    color: blue;
  }
  }
`


const LINK_CSS = css`
a {
  font-weight:normal;
  text-decoration:none;
  border-bottom: 2px solid transparent;
}
`
const ACTIVE_CSS = css`
a {
  font-weight:bold;
  /* text-decoration:underline; */
  border-bottom: 2px solid blue;
}
`

export default TOC