import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import { getIdsFromDirectory, getFileContents } from '../../utils/fs'

import Detail from '../../components/Detail'

const components = { Detail }

export default function BlogPost ({ source, frontMatter }) {
  const content = hydrate(source, { components })

  return (
    <div>
      <h1>{frontMatter.title}</h1>
      {content}
    </div>
  )
}

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