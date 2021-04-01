/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { under768 } from '../styles/mediaQueries'

import { getFrontMatterForIndex } from '../utils/fs'

import Layout from '../components/Layout'
import Info from '../components/Info'
import Blogs from '../components/Blogs'
import WebProjects from '../components/WebProjects'

export default function Home({ blogData, webprojectsData }) {
  return (
    <Layout title="Nicholas Marino">
    <main css={styles}>
      <Info />
      <WebProjects projects={webprojectsData} />
      <Blogs blogs={blogData} />
    </main>
    </Layout>
  )
}

const styles = css`
  display: flex;
  ${under768} { 
    flex-direction: column;
  }
`

export async function getStaticProps() {
  const blogData = getFrontMatterForIndex('blog')
  const webprojectsData = getFrontMatterForIndex('webprojects')

  return {
    props: {
      blogData,
      webprojectsData
    }
  }
}