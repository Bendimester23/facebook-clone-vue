import { getToken } from './auth'
export const API_URL = 'http://192.168.0.15:20004' // 'https://secret-tor-52036.herokuapp.com'

export async function fetchPosts (): Promise<PostData[]> {
  const globalPost = await fetch(API_URL + '/api/posts/global', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': getToken()
    }
  })

  const res = await globalPost.text()

  if (res.startsWith('Error')) {
    return []
  }

  return JSON.parse(res)
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

  if (respp.startsWith('Error') || respp.startsWith('Acce')) {
    return new PostData(id, 'Error', 'Error getting post!', new Date(Date.now()))
  }

  const res = JSON.parse(respp)

  return new PostData(res._id, res.title, res.text, new Date(Date.now()))
}
