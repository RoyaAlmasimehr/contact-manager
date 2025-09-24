import { useEffect, useRef } from "react";

import { Props } from "@/types/infiniteScroll";

export function useInfiniteScroll({ hasMore, loadMore }: Props) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = observerRef.current;
    if (!el || !hasMore) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore]);

  return observerRef;
}
