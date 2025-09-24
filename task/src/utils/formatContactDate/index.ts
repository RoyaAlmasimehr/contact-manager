import { Contact } from "@/types/contact";
export function formatContactDate(contact: Contact): string {
  return contact.createdAt
    ? new Date(contact.createdAt).toLocaleDateString()
    : "N/A";
}
