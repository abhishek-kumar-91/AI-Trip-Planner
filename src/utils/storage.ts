// src/utils/storage.ts

const CHAT_KEY = "chat_history";

export const saveChatToStorage = (title: string, messages: any[]) => {
  const existing = JSON.parse(localStorage.getItem(CHAT_KEY) || "{}");
  existing[title] = messages;
  localStorage.setItem(CHAT_KEY, JSON.stringify(existing));
};

export const getAllChats = (): Record<string, any[]> => {
  return JSON.parse(localStorage.getItem(CHAT_KEY) || "{}");
};

export const deleteChat = (title: string) => {
  const existing = getAllChats();
  delete existing[title];
  localStorage.setItem(CHAT_KEY, JSON.stringify(existing));
};
