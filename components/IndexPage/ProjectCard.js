import Image from 'next/image'
import Link from 'next/link'

/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react'
import { cardHead, cardShape, sectionText } from 'styles/partials'

export default function ProjectCard({ project }) {

  return (
    <a href={project.slug} target="_blank" rel="noopener noreferrer">
    <div css={styles}>
      <div className="wrapper">
        <Image
          width={project.images[0].width}
          height={project.images[0].height}
          quality={100}
          src={project.images[0].src}
          alt={project.images[0].alt}
        />      
      </div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </div>
    </a>
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
    color: #666;
  }
  
  :hover {
    h3 {
      color: blue;
    }
  }
`