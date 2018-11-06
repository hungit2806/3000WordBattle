// a request helper which reads the access_token from the redux state and passes it in its HTTP request
export function apiRequestGet(url, method = "GET") {
  const headers = new Headers();
  // headers.append("Accept", "application/json");
  // headers.append("Authorization", `Bearer ` + sessionStorage.getItem('access_token'));
  const options = {
    method,
    headers
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}

export function apiRequestPost(url, body, method = "POST") {
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ` + sessionStorage.getItem('access_token'));

  const options = {
    method,
    headers,
    body
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}


export function apiRequestDelete(url, body, method = "DELETE") {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ` + sessionStorage.getItem('access_token'));

  const options = {
    method,
    headers,
    body
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}

export function apiRequestPut(url, body, method = "PUT") {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ` + sessionStorage.getItem('access_token'));
  const options = {
    method,
    headers,
    body,
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}