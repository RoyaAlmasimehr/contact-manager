"use client";
import { Box } from "@mui/material";
import ContactCard from "@/components/ContactCard";
import Loader from "@/components/Loader";
import { showError } from "@/utils";
import { useHomeClient } from "./HomeClient.hook";
import { HomeClientProps } from "./HomeClient.types";

export function HomeClient({ showVisited = false }: HomeClientProps) {
  const { contactsToShow, loadMoreRef, hasNextPage, isLoading, isError,error } =
    useHomeClient(showVisited);

  if (isLoading) return <Loader />;
if (isError) {
  showError((error as Error)?.message ?? "Failed to load contacts.");
  return null;
}


  return (
    <Box mt={4}>
      <Box display="flex" flexDirection="column" gap={5}>
        {contactsToShow.map((c) => (
          <ContactCard key={c.id} contact={c} />
        ))}
      </Box>

      {!showVisited && hasNextPage && (
        <div ref={loadMoreRef}  />
      )}
    </Box>
  );
}
