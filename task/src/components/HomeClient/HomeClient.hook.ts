"use client";
import { useContacts } from "@/hooks/useContacts";
import useVisitedContacts from "@/hooks/useVisitedContacts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

export function useHomeClient(showVisited: boolean) {
  const { data, fetchNextPage, hasNextPage, isLoading, isError ,error} =
    useContacts();
  const { visited } = useVisitedContacts();

  const loadMoreRef = useInfiniteScroll({
    hasMore: Boolean(hasNextPage),
    loadMore: fetchNextPage,
  });


  const contactsToShow = showVisited
    ? visited
    : data?.pages.flatMap((p) => p.data) ?? [];

  return { contactsToShow, loadMoreRef, hasNextPage, isLoading, isError ,error};
}
