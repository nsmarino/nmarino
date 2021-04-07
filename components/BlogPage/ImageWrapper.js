import Image from 'next/image'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

const ImageWrapper = () => {
  return (
    <div className="wrapper" css={styles}>
      <img src='/blog/tetris/rendered-tetromino.png' alt="rendered tetromino" />

      {/* <Image 
        width={400}
        height={800}
        quality={100}
        layout="fixed"
        src={'/blog/tetris/rendered-tetromino.png'}
        alt={'Rendered Tetromino'}
      /> */}
    </div>
  )
}

const styles = css`
  border: 4px solid blue;

  img {
    width: 300px;
  height: 300px;
  object-fit: contain;
  }
`

export default ImageWrapper