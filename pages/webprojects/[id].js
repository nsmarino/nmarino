import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import Link from 'next/link'

import { 
  sectionLabel, 
  articleHead, 
  topLine, 
  articleText, 
  refinedLink
} from 'styles/partials'

import { getIdsFromDirectory, getFileContents } from 'utils/fs'

import Layout from '@/components/Layout'
import Detail from '@/components/WebProjectPage/Detail'
import Images from '@/components/WebProjectPage/ProjectImages'

import { under768 } from 'styles/mediaQueries'

import CodeBlock from '@/components/CodeBlock'

const components = { 
  Detail,
  pre: props => <div {...props} />,
  code: CodeBlock,
}

export default function WebProject ({ source, frontMatter }) {
  const content = hydrate(source, { components })

  return (
    <Layout title={frontMatter.title}>
      <div css={containerStyles}>
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

const containerStyles = css`
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
  h3 {
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: normal;
    font-family: Computer-Modern;
    color: grey;
    font-size: 90%;
    margin-top: 3rem;
  }

  p {
    ${articleText}
    ${under768} {
      width: 100%;
    }
  }
  ul, li {
    ${articleText}
    ${under768} {
      width: 100%;
    }
  }

  a {
    ${refinedLink}
  }

  img {
    margin-top: 1rem;
    max-width: 100%;
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