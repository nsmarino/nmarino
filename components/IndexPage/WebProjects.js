import ProjectCard from './ProjectCard'
import { under768 } from 'styles/mediaQueries'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { sectionLabel, topLine } from 'styles/partials'

import sort from 'utils/sort'

const tempProjects = [
  {
    desc: "Online menu: Eleventy frontend sourced from lightweight Netlify CMS, a whole lot of CSS. [DEVELOPMENT]",
    images: [
      {
        src: '/webprojects/kind-regards/kindregards.png',
        width: 1896,
        height: 948,
        alt: 'Kind Regards NYC'
      },
    ],
    order: 1,
    slug: "https://www.kindregardsnyc.com/",
    title: "Kind Regards NYC"
  },
  {
    desc: "(Work in progress) E-commerce: Headless Shopify for independent bookstore in Lower East Side. [DEVELOPMENT]",
    images: [
      {
        src: '/webprojects/sweet-pickle/sweetpickle.png',
        width: 1893,
        height: 921,
        alt: 'Sweet Pickle'
      },
    ],
    order: 3,
    slug: "https://sweet-pickle.netlify.app/",
    title: "Sweet Pickle Books"
  },
  {
    desc: "Multimedia portfolio: React frontend with heavily customized Sanity CMS backend. [DEVELOPMENT]",
    images: [
      {
        src: '/webprojects/kyle-sauer-portfolio/ksp.png',
        width: 1912,
        height: 945,
        alt: 'Kyle Sauer Portfolio'
      },
    ],
    order: 2,
    slug: "https://www.kylesauer.com/",
    title: "Kyle Sauer Portfolio"
  },
]
export default function WebProjects({ projects }) {

  return (
    <section css={styles}>
      <h2>Web Projects</h2>
      {tempProjects.sort(sort).map(project=><ProjectCard project={project} key={project.slug} />)}
    </section>
  )
}

const styles = css`
  flex: 1 0 150px;
  margin: 50px;

  ${topLine}

  h2 {
    ${sectionLabel}
  }

  ${under768} { 
    margin: 25px;
    margin-bottom:0;
  }
`