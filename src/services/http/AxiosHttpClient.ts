import axios from "axios"
import type { HttpClient } from "./HttpClient"

export class AxiosHttpClient implements HttpClient {
  baseUrl: string
  defaultHeaders: Record<string, string>

  constructor(baseUrl: string, defaultHeaders: Record<string, string>) {
    this.baseUrl = baseUrl
    this.defaultHeaders = defaultHeaders
  }

  async get(path: string, params: Record<string, string>, headers?: Record<string, string>): Promise<any> {
    const url = `${this.baseUrl}${path}`
    const response = await axios.get(url, { params, headers: { ...this.defaultHeaders, ...headers } })
    return response.data
  }
}
