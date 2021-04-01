import ProjectCard from './ProjectCard'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { sectionLabel, topLine } from '../styles/partials'

export default function WebProjects({ projects }) {
  return (
    <section css={styles}>
      <h2>Web Projects</h2>
      {projects.map(project=><ProjectCard project={project} key={project.slug} />)}
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
`