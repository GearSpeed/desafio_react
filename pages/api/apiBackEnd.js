const API_URL = "https://backend-desafio-97wq.onrender.com";

export async function signUp(name, profilePic, userName, email, password) {
  if (!profilePic)
    profilePic =
      "https://imgs.search.brave.com/5juHS53Y4trr3LQKd1FtB45PY5vMe8yQFzi_g-MQIT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC81/NS82Ny9uby1pbWFn/ZS1hdmFpbGFibGUt/cGljdHVyZS12ZWN0/b3ItMzE1OTU1Njcu/anBn";
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
  const notImage =
    "https://imgs.search.brave.com/OD4d2lCjWhnqHPFjhYsCBotq5IIUXGK-DXSDPzeRt48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYyLzI2Lzc4/LzM2MF9GXzYyMjY3/ODcxX3QxbjhMU2ty/RlNMMnQxYVFTeWls/eWZWcEMyMXdReDU5/LmpwZw";
  if (!img) img = notImage;
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
