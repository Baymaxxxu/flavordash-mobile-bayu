import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "flavordash_token";

const mockJwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJuYW1lIjoiQmF5dSIsImV4cCI6MTg5MzQ1NjAwMH0.signature";

export const login = async () => {
  await AsyncStorage.setItem(TOKEN_KEY, mockJwtToken);
};

export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

export const isTokenValid = async () => {
  const token = await getToken();

  if (!token) {
    return false;
  }

  const parts = token.split(".");

  return parts.length === 3;
};