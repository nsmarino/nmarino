import Head from 'next/head'
/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'

const styles = css`
  max-width: 1200px;
  margin: 0 auto;
`
export default function Layout({ children, title }) {
  return (
    <div css={styles}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/Computer-Modern.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>
      {children}
    </div>
  )
}