// API client for Fooocus backend
import type { AppConfig } from '../config'

interface GenerationRequest {
  prompt: string
  negative_prompt?: string
  style: string
  width: number
  height: number
  steps: number
  cfg_scale: number
  seed?: number
}

interface GenerationResponse {
  success: boolean
  images: string[]
  seed: number
  time: number
}

export class FooocusApiClient {
  private baseUrl: string
  private apiKey?: string

  constructor(config: AppConfig) {
    this.baseUrl = config.fooocusApiUrl
    this.apiKey = config.fooocusApiKey
  }

  private getHeaders() {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }
    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`
    }
    return headers
  }

  async generate(params: GenerationRequest): Promise<GenerationResponse> {
    const response = await fetch(`${this.baseUrl}/generate`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      throw new Error(`Generation failed: ${response.statusText}`)
    }

    return response.json()
  }

  async getModels(): Promise<string[]> {
    const response = await fetch(`${this.baseUrl}/models`, {
      headers: this.getHeaders(),
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch models: ${response.statusText}`)
    }

    return response.json()
  }

  async getStyles(): Promise<string[]> {
    const response = await fetch(`${this.baseUrl}/styles`, {
      headers: this.getHeaders(),
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch styles: ${response.statusText}`)
    }

    return response.json()
  }
}
