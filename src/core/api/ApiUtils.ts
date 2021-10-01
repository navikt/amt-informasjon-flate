// eslint-disable-next-line no-undef
export function api<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> {
  const uri = `${process.env.REACT_APP_BACKEND_API_ROOT}/api${input}`;
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
