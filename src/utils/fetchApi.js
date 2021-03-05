const fetchApi = async ({
  url, path, method = 'GET', body,
}) => {
  const res = await fetch(`${url}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify(body) || null,
  });

  if (!res.ok) {
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }

  return res.json();
};

export default fetchApi;
