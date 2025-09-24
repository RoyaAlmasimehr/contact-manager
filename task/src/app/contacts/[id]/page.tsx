"use client";

import { Box } from "@mui/material";
import Loader from "@/components/Loader";
import { showError } from "@/utils";
import ContactDetails from "@/components/ContactDetails/insex";
import BackButton from "@/components/BackButton";
import { useContactDetail } from "@/hooks/useContactDetail";

export default function ContactPage() {
  const { contact, isLoading, isError, error } = useContactDetail();

  if (isLoading) return <Loader />;
  if (isError || !contact) {
    showError((error as Error)?.message ?? "Contact not found");
    return null;
  }

  return (
    <Box mt={2}>
      <BackButton />
      <ContactDetails contact={contact} />
    </Box>
  );
}
