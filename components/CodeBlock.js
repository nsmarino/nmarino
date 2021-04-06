import Highlight, {defaultProps} from 'prism-react-renderer'
import okaidia from 'prism-react-renderer/themes/okaidia';

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

import { under768 } from '../styles/mediaQueries'

const styles = css`
 width: 70%;
 padding: 1rem;
 max-height: 100vh;
 overflow: auto;
 ${under768} {
   width:100%;
 }
`

const CodeBlock = ({children}) => {
  return (
    <Highlight {...defaultProps} theme={okaidia} code={children} language="javascript">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre 
          className={className} 
          css={styles}
          style={{
              ...style, 
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock