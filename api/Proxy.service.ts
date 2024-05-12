import type { ProxyResponseApi } from "./apiSchemas";

type FetcherOptions = {
  onError: (err: unknown) => void;
};

function fetcher(baseUrl: string, { onError }: FetcherOptions) {
  return <T>(url: string, init: RequestInit = {}) => {
    const headers = new Headers(init.headers);
    headers.append("Content-Type", "application/json");

    return fetch(`${globalThis.API_URL ?? baseUrl}${url}`, {
      ...init,
      headers,
    })
      .then((r) => {
        const type = r.headers.get("Content-Type");

        if (type && type.includes("application/json")) {
          return r.json();
        }

        return null;
      })
      .catch((err) => {
        throw err;
      });
  };
}

export class ProxyService {
  private client;

  constructor() {
    this.client = fetcher("/api", {
      onError: console.error,
    });
  }

  getAll() {
    return this.client<ProxyResponseApi[]>("/proxy", { method: "GET" });
  }

  create(proxy: ProxyResponseApi) {
    return this.client<ProxyResponseApi>("/proxy", {
      method: "POST",
      body: JSON.stringify(proxy),
    });
  }

  update(id: string, proxy: ProxyResponseApi) {
    return this.client<ProxyResponseApi>(`/proxy/${id}`, {
      method: "PUT",
      body: JSON.stringify(proxy),
    });
  }

  delete(id: string) {
    return this.client<ProxyResponseApi>(`/proxy/${id}`, {
      method: "DELETE",
    });
  }
}
