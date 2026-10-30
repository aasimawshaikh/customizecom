export interface ApiClientOptions {
  baseUrl: string;
  getAccessToken?: () => Promise<string | null>;
}

export class ApiError extends Error {
  constructor(message: string, public readonly status: number, public readonly details?: unknown) {
    super(message);
    this.name = "ApiError";
  }
}

export function createApiClient(options: ApiClientOptions) {
  const baseUrl = options.baseUrl.replace(/\/$/, "");
  return {
    async request<T>(path: string, init: RequestInit = {}): Promise<T> {
      const token = await options.getAccessToken?.();
      const headers = new Headers(init.headers);
      if (!headers.has("Content-Type") && init.body) headers.set("Content-Type", "application/json");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      const response = await fetch(`${baseUrl}${path.startsWith("/") ? path : `/${path}`}`, { ...init, headers });
      const payload = response.status === 204 ? undefined : await response.json().catch(() => undefined);
      if (!response.ok) throw new ApiError("API request failed", response.status, payload);
      return payload as T;
    },
  };
}