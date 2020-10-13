import { getToken } from './auth'
export const API_URL = 'https://node1.limecraft.net:20004'

export function fetchPosts (uid: string): PostData[] {
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

export async function getPost (id: string): Promise<PostData> {
  const resp = await fetch(API_URL + '/api/posts/post/' + id, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': getToken()
    }
  })

  const respp = await resp.text()

  console.log(respp)

  if (respp.startsWith('Error') || respp.startsWith('Acce')) {
    return new PostData(id, 'Error', 'Error getting post!', new Date(Date.now()))
  }

  const res = JSON.parse(respp)

  return new PostData(res._id, res.title, res.text, new Date(Date.now()))
}
