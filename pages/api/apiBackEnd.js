const API_URL = "http://localhost:8081";

export async function signUp(name, profilePic, userName, email, password) {
  const response = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      profilePic,
      userName,
      email,
      password,
    }),
  });
  return response.json();
}

export async function createPost(titlePost, contentPost, img) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      title: titlePost,
      image: img,
      body: contentPost,
    }),
  });
  return response.json();
}

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const json = await response.json();
  console.log("token:", json.token);
  return json.data.token;
}

export async function getPosts() {
  const response = await fetch(`${API_URL}/post`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  return json.data.posts;
}

export async function getPost(id) {
  const response = await fetch(`${API_URL}/post/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  return json.data.post;
}

export async function getUser(id) {
  const response = await fetch(`${API_URL}/user/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json.data.user;
}
