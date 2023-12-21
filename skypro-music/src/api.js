export async function getPlayList() {
  const Response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
  console.log(Response);

  if (Response.ok) {
    const data = await Response.json();
    console.log(data);
    return data;
  } else {
    throw new Error("Ошибка сервера");
  }
}
export const register = async ({ email, password }) => {
  try {
    const response = await fetch(
      "https://skypro-music-api.skyeng.tech/user/signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username: email,
        }),
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
