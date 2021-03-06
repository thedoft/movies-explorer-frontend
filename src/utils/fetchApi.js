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
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }

  return res.json();
};

export default fetchApi;
