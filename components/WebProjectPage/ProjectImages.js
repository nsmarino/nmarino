/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

import { topLine } from 'styles/partials'
import { under768 } from 'styles/mediaQueries'

import Image from 'next/image'

const styles = css`
  ${topLine}
  width: 300px;
  flex: 1 1 300px;
  margin: 50px;
  padding: 20px;

${under768} {
    width: unset;
    margin: 25px;
    margin-top: 0px;
  }
`

const Images = ({images}) => {
  return (
    <aside css={styles}>
      {images.map(image=>
      <div style={{marginBottom: '20px'}} key={image.alt}>
        <Image
          width={image.width}
          height={image.height}
          layout='responsive'
          src={image.src}
          alt={image.alt}
        />
      </div> 
      )}
    </aside>
  )
}

export default Images