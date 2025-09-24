
export const isLocalStorageAvailable = (): boolean => {
  try {
    return typeof window !== "undefined" && "localStorage" in window;
  } catch {
    return false;
  }
};

export const getLocalStorage = <T>(key: string): T | null => {
  if (!isLocalStorageAvailable()) return null;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch (error) {
    console.error(`Failed to parse localStorage[${key}]:`, error);
    return null;
  }
};