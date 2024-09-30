export interface HttpClient {
  baseUrl: string
  defaultHeaders: Record<string, string>
  get(path: string, params: Record<string, string>): Promise<any>
}
