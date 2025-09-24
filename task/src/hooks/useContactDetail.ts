"use client";

import { useQuery } from "@tanstack/react-query";
import { getContactById } from "@/lib/apiClient";
import { useParams } from "next/navigation";
import  useVisitedContacts  from "@/hooks/useVisitedContacts";
import { useEffect } from "react";
import { Contact } from "@/types/contact";

export function useContactDetail() {
  const params = useParams();
  const id = params?.id ? Number(params.id) : NaN;
  const { visited, addVisited } = useVisitedContacts();

  const { data, isLoading, isError, error } = useQuery<Contact>({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
    enabled: !Number.isNaN(id),
  });

  useEffect(() => {
    if (data) {
      const exists = visited.some((c) => c.id === data.id);
      if (!exists) addVisited(data);
    }
  }, [data, addVisited, visited]);

  return {
    contact: data,
    isLoading,
    isError,
    error,
  };
}
