import fs from 'fs'
import path from 'path'

const blogDirectory = path.join(process.cwd(), 'blog')

export function getAllPostIds() {
    const fileNames = fs.readdirSync(blogDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.mdx$/, '')
        }
      }
    })
  }

  export async function getPostData(id) {
    const fullPath = path.join(blogDirectory, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Combine the data with the id and contentHtml
    return fileContents
  }

