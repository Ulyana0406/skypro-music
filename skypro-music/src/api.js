export async function getPlayList() {
  const Response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );

  if (!Response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await Response.json();
  return data;
}
