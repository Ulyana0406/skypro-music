import { useState } from "react";
import { AuthPage } from "./pages/Login/Login";
import { Login } from "./pages/Register/Register";

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
    const data = await response.json();
    return response;
  } catch (error) {
    return error;
  }
};
