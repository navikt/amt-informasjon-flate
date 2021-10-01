// eslint-disable-next-line no-undef
export function api<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> {
  const uri = `${process.env.REACT_APP_BACKEND_API_ROOT}/api${input}`;
  const rInit = { ...init };
  rInit.headers = {
    'Content-Type': 'application/json',
  };
  return fetch(uri, rInit)
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
