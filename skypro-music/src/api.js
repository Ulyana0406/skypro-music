import { useState } from "react";
import { AuthPage } from "./pages/Registr/Registr";
import { Login } from "./pages/Login/Login";

export async function getPlayList() {
  const Response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );

  if (!Response.ok) {
    if (Response.status === 500) {
      throw new Error("Ошибка сервера");
    }
  }

  const data = await Response.json();
  return data;
}
