// eslint-disable-next-line no-undef
export function api<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> {
  const uri = `/api${input}`;
  return fetch(uri, init)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: T }>;
    })
    .then(data => {
      return data.data;
    });
}
