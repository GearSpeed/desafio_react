const API_URL = "https://api-33.sampayo.lat";

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
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/post`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  return json.data.posts;
}
