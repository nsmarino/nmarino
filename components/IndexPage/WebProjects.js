import ProjectCard from './ProjectCard'
import { under768 } from 'styles/mediaQueries'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { sectionLabel, topLine } from 'styles/partials'

import sort from 'utils/sort'

export default function WebProjects({ projects }) {
  return (
    <section css={styles}>
      <h2>Web Projects</h2>
      {projects.sort(sort).map(project=><ProjectCard project={project} key={project.slug} />)}
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