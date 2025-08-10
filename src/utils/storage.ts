export function saveForm(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key: string) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
