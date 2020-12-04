export type FileType = 'png' | 'jpeg'
export type Theme = 'light' | 'dark'

export interface ParsedRequest {
  username: string
  fileType: FileType
}
