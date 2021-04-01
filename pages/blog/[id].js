import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

import {getAllPostIds, getPostData } from '../../datasources/blogPosts'

import TOC from '../../components/TOC'
import CustomH2 from '../../components/CustomH2'

const components = { h2: CustomH2 }

export default function BlogPost ({ source, frontMatter, headings }) {
  console.log(frontMatter)
  const content = hydrate(source, { components })

 return (<div>
   <TOC headings={headings} />
   <h1>{frontMatter.title}</h1>
   {content}
   </div>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const source = await getPostData(params.id)
  const headings = source
  .split('\n')
  .filter(line=> line.match(/^###*\s/))
  .map(line=> line.replace(/^###*\s/, ''))

  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, { components, scope: data })
  return { props: { source: mdxSource, frontMatter: data, headings } }
}