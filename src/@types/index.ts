export type PageInfo = {
  totalResults?: number
  resultsPerPage?: number
}

export type Item = {
  etag?: string
  id: string
  kind?: string
  snippet: Snippet
}

export type Snippet = {
  canReply?: boolean
  isPublic?: boolean
  topLevelComment?: Record<string, any>
  totalReplyCount?: number
  videoId: string
}

export type Video = {
  id: string
  etag: string
  snippet: Snippet
}
