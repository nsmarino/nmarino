import Image from 'next/image'
import Link from 'next/link'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { cardHead, cardShape, sectionText } from '../styles/partials'

export default function ProjectCard({ project }) {

  return (
    <Link href={`webprojects/${project.slug}`}>
    <div css={styles}>
      <div className="wrapper">
        <Image
          width={project.img.width}
          height={project.img.height}
          layout='responsive'
          src={project.img.src}
          alt={project.img.alt}
        />      
      </div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </div>
    </Link>
  )
}

const styles=css`
  ${cardShape}
  cursor: pointer;

  h3 {
    ${cardHead}
  }

  p {
    ${sectionText}
  }
  
  :hover {
    h3 {
      color: blue;
    }
  }
`