import store from '@/store'
import { API_URL } from './feed'
import router from '@/router/index'

let token = ''
let username = ''

let refresher: number

export async function signOut (): Promise<string> {
  clearInterval(refresher)
  console.log('Signing Out!')
  store.commit('setLoggedIn', false)
  username = ''
  token = ''
  return 'Done'
}

export async function refresh (): Promise<string> {
  let resp
  try {
    resp = await fetch(API_URL + '/api/auth/refresh?username=' + username + '&token=' + token, {
      method: 'post',
      body: '',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    })
  } catch (err) {
    signOut()
    return 'Error'
  }

  if (resp === null || resp === undefined) {
    signOut()
    return 'Error'
  }

  const text = await resp.text()

  if (text.startsWith('Error') || text.startsWith('ValidationError')) {
    await signOut()
    return 'Error'
  }

  token = text

  return text
}

export async function login (name: string, password: string): Promise<string> {
  username = name
  token = 'asd'

  const resp = await fetch(API_URL + '/api/auth/login?username=' + name + '&password=' + password, {
    method: 'post',
    body: JSON.stringify({ username: name, password: password }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })

  const res = await resp.text()

  if (res.includes('Email or password is wrong!') || res.startsWith('ValidationError')) {
    return 'Error'
  }
  console.debug('Logged in with name: ' + name)
  token = res
  store.commit('setLoggedIn', true)
  refresher = setInterval(async () => {
    console.debug('Refreshing token!')
    const resp = await refresh()
  }, 250000)
  return res
}

export async function register (name: string, email: string, password: string): Promise<string> {
  console.log('Registering: ' + name)
  const resp = await fetch(API_URL + '/api/auth/register?name=' + name + '&password=' + password + '&email=' + email, {
    method: 'post',
    body: JSON.stringify({ username: name, password: password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const res = await resp.text()

  if (res.startsWith('ValidationError') || res.startsWith('Error')) {
    return 'Error'
  }
  console.debug('Registered with name: ' + name)

  alert('Regisztráció sikeres. Kérem jelentkezzen be!')

  window.location.assign(router.resolve({ path: '/auth/login' }).href)

  return res
}

export function getToken (): string {
  return token
}
