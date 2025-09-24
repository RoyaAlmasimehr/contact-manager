const isLocalStorageAvailable = (): boolean => {
  try {
    return typeof window !== "undefined" && "localStorage" in window;
  } catch {
    return false;
  }
};

export const setLocalStorage = (key: string, value: any): boolean => {
  if (!isLocalStorageAvailable()) {
    console.warn("localStorage is not available");
    return false;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Failed to set localStorage:", error);
    return false;
  }
};
