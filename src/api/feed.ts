import axios from 'axios'
const API_URL = 'http://localhost:20004'

export default API_URL

export function fetch (uid: string): PostData[] {
  return []
}

export class PostData {
    id: string
    title: string
    content: string
    postedAt: Date

    constructor (id: string, title: string, content: string, postedAt: Date) {
      this.id = id
      this.title = title
      this.content = content
      this.postedAt = postedAt
    }
}

export async function getPost (id: string) {
  const resp = await axios.get(API_URL + '/api/posts/post/' + id, {
    headers: {
      'auth-token': ''
    }
  })
}
