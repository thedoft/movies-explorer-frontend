const fetchApi = async ({
  url, path, method = 'GET', body = null,
}) => {
  const res = await fetch(`${url}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: body && JSON.stringify(body),
    credentials: 'include',
  });

  if (!res.ok) {
    const error = await res.json();
    return Promise.reject(new Error(`${error.message}`));
  }

  return res.json();
};

export default fetchApi;
