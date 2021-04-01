import Link from 'next/link'
import { useRouter } from 'next/router'
import useActiveId from '../hooks/useActiveId'
import slugify from '../utils/slugify'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

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
  <aside style={{position: 'fixed'}}>
    {headings.map(h=> <LinkInTOC heading={h} key={h} active={activeId} />)}
  </aside>
)
}

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

export default TOC