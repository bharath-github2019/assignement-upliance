export function saveForm(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key: string) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

// Load all saved forms (assuming keys follow some pattern or you store all keys somewhere)
export function loadAll(): any[] {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('form_')) {  // Adjust prefix as needed
      const item = localStorage.getItem(key);
      if (item) results.push(JSON.parse(item));
    }
  }
  return results;
}

// Load one saved form by id (assuming key = 'form_' + id)
export function loadById(id: string): any | null {
  return getFromStorage('form_' + id);
}
