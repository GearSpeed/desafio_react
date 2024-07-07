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
  return json.token;
}
