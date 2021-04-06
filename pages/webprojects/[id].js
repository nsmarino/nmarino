import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  sectionLabel, 
  articleHead, 
  topLine, 
  articleText, 
  techieLink 
} from '../../styles/partials'

import { getIdsFromDirectory, getFileContents } from '../../utils/fs'

import Layout from '../../components/Layout'
import Detail from '../../components/Detail'
import Images from '../../components/ProjectImages'

import { under768 } from '../../styles/mediaQueries'

const components = { Detail, }

export default function BlogPost ({ source, frontMatter }) {
  const content = hydrate(source, { components })

  return (
    <Layout title={frontMatter.title}>
      <div css={containterStyles}>
      <main css={styles}>
      <Link href="/"><span className="navToIndex">« Nicholas Marino</span></Link>
      <h1>{frontMatter.title}</h1>
      {content}
      </main>

      <Images images={frontMatter.images} />
      </div>

    </Layout>
  )
}

const containterStyles = css`
  display: flex;

  ${under768} {
    flex-direction: column;
  }
`

const styles = css`
  ${topLine}
  flex: 2 1 600px;
  margin: 50px;
  ${under768} {
    flex: 0 1 0px;
    margin: 25px;
  }
  .navToIndex {
    ${sectionLabel}
    color: blue;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h1 {
    ${articleHead}
  }
  p {
    ${articleText}
  }
  a {
    ${techieLink}
  }

`

export async function getStaticPaths() {
  const paths = getIdsFromDirectory('webprojects')

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const source = await getFileContents('webprojects', params.id)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, { components, scope: data })

  return { 
    props: 
    { 
      source: mdxSource, 
      frontMatter: data 
    } 
  }
}