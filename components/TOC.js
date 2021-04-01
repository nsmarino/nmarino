import Link from 'next/link'
import { useRouter } from 'next/router'
import useActiveId from '../hooks/useActiveId'
import slugify from '../utils/slugify'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

const LINK_CSS = css`
a {
  color: red;
}
`
const ACTIVE_CSS = css`
a {
  color: blue;
}
`

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
console.log(headingIds)
const activeId = useActiveId(headingIds)
console.log(activeId)
return (
  <aside style={{position: 'fixed'}}>
    {headings.map(h=> <LinkInTOC heading={h} key={h} active={activeId} />)}
  </aside>
)
}

export default TOC