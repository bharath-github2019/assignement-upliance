export function loadAll() {
  const entries = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      const value = localStorage.getItem(key);
      entries.push({ key, value: value ? JSON.parse(value) : null });
    }
  }
  return entries;
}

export function loadById(id: string) {
  const item = localStorage.getItem(id);
  return item ? JSON.parse(item) : null;
}
