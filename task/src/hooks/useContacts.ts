
import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { getContacts } from "@/lib/apiClient";
import { ContactsResponse } from "@/types/contact";

export function useContacts(pageSize = 20) {
  return useInfiniteQuery<
    ContactsResponse, 
    Error,
    InfiniteData<ContactsResponse>,
    ["contacts"],
    number 
  >({
    queryKey: ["contacts"],
    queryFn: async ({ pageParam = 1 }) =>
      await getContacts(pageParam, pageSize),
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });
}
