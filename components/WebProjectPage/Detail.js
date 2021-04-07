/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

import { summary } from 'styles/partials'

const styles = css`
  summary {
    ${summary}
  }
  font-family: Computer-Modern;
`

const Detail = ({sum, children}) => {
  return (
    <details css={styles}>
      <summary>{sum}</summary>
      {children}
    </details>
  )
}

export default Detail