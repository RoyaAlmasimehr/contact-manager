"use client";

import { useState, useEffect, useCallback } from "react";
import { Contact } from "@/types/contact";
import { getLocalStorage, setLocalStorage } from "@/utils"; 
import { STORAGE_KEY } from "@/constants";

export default function useVisitedContacts() {
  const [visited, setVisited] = useState<Contact[]>([]);


  useEffect(() => {
    const stored = getLocalStorage<Contact[]>(STORAGE_KEY);
    if (stored) setVisited(stored);
  }, []);


  const addVisited = useCallback((contact: Contact) => {
    setVisited((prev) => {
      const exists = prev.some((c) => c.id === contact.id);
      if (exists) return prev;

      const updated = [contact, ...prev].slice(0, 5);
      setLocalStorage(STORAGE_KEY, updated); 
      return updated;
    });
  }, []);

  return { visited, addVisited };
}
