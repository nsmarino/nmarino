import Highlight, {defaultProps} from 'prism-react-renderer'
import rangeParser from 'parse-numeric-range';
import okaidia from 'prism-react-renderer/themes/okaidia';

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

import { under768 } from '../styles/mediaQueries'

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return (index) => (lineNumbers.includes(index + 1))
  } else {
    return () => false
  }
}

const CodeBlock = ({children, metastring}) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

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
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            if (shouldHighlightLine(index)) { lineProps.className = `${lineProps.className} highlight-line` }
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

const styles = css`
 width: 70%;
 padding: 1rem;
 max-height: 90vh;
 overflow: auto;
 ${under768} {
   width:100%;
 }
`

export default CodeBlock
