'use client'
import { useState, useCallback } from "react";

export function useHomeView() {
  const [view, setView] = useState<"all" | "visited">("all");

  const selectVisited = useCallback(() => setView("visited"), []);
  const selectAll = useCallback(() => setView("all"), []);

  return {
    view,
    showVisited: view === "visited",
    showAll: view === "all",
    selectVisited,
    selectAll,
  };
}
