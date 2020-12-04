import { IncomingMessage } from 'http'
import { parse } from 'url'
import { ParsedRequest } from './types'

export function parseRequest(req: IncomingMessage) {
  console.log('HTTP ' + req.url)
  const { query } = parse(req.url || '/', true)
  const { username } = query || {}

  const parsedRequest: ParsedRequest = {
    fileType: 'png',
    username: `${username}`,
  }
  return parsedRequest
}
