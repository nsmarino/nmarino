import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getFrontMatterForIndex(dir) {
  const directory = path.join(process.cwd(), dir)
  const fileNames = fs.readdirSync(directory)

  const frontMatter = fileNames.map(fileName => {
    const fullPath = path.join(dir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content, data } = matter(fileContents)
    return data
  })
  return frontMatter
}

export function getIdsFromDirectory(dir) {

  const directory = path.join(process.cwd(), dir)

  const fileNames = fs.readdirSync(directory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.mdx$/, '')
        }
      }
    })
  }

  export async function getFileContents(dir, id) {
    const fullPath = path.join(dir, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Combine the data with the id and contentHtml
    return fileContents
  }

