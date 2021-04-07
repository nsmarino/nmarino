import Link from 'next/link'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { under768 } from 'styles/mediaQueries'

import { getIdsFromDirectory, getFileContents } from 'utils/fs'
import { 
  articleHead, 
  articleSubHead, 
  topLine, 
  articleText, 
  refinedLink, 
  sectionLabel 
} from 'styles/partials'

import Layout from '@/components/Layout'
import TOC from '@/components/BlogPage/TOC'
import CustomH2 from '@/components/BlogPage/CustomH2'
import CodeBlock from '@/components/CodeBlock'

const components = { 
  h2: CustomH2, 
  pre: props => <div {...props} />,
  code: CodeBlock,
}

export default function BlogPost ({ source, frontMatter, headings }) {
  const content = hydrate(source, { components })

  return (
    <Layout title={frontMatter.title}>
      <TOC headings={headings} />
      <main css={styles}>
        <header>
          <div className="dateAndWordCount">
            <time>{frontMatter.date}</time>
            <div className="wordCount">{frontMatter.wordCount} words</div>
          </div>
          <Link href="/"><span className="navToIndex">« Nicholas Marino</span></Link>
          <h1>{frontMatter.title}</h1>
          <p className="desc">{frontMatter.desc}</p>

        </header>

        {content}

      </main>
    </Layout>
  )
}

const styles = css`
  ${topLine}
  /* flex: 2 0 600px; */
  margin: 50px;
  margin-left: 350px;
  padding-bottom: 350px;

  .dateAndWordCount {
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
  }

  time, .wordCount {
    ${sectionLabel}
    color: #666;
  }

  .navToIndex {
    display: none;
    ${under768} {
      ${sectionLabel}
    color: blue;
    display: block;
    margin-top: 50px;

    :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  h1 {
    ${articleHead}

    ${under768} {
      margin-top: 0px;
    }
  }

  .desc {
    margin: 0rem;
    margin-top: 2px;
    font-size: 90%;
    color: #666;
    margin-bottom: 2.5rem;
  }

  h2 {
    ${articleSubHead}
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
  }

  ${under768} {
    margin: 25px;
  }
`

export async function getStaticPaths() {
  const paths = getIdsFromDirectory('blog')
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const source = await getFileContents('blog', params.id)

  const headings = source
  .split('\n')
  .filter(line=> line.match(/^##\s/))
  .map(line=> line.replace(/^##\s/, ''))
  // Previously: /^###*\s/
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, { components, scope: data })
  return { props: { source: mdxSource, frontMatter: data, headings } }
}