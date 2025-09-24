import { CONTACTS_API_PATH } from "@/constants";
import { ContactsResponse } from "@/types/contact";

export async function getContacts(
  page: number,
  pageSize: number = 20
): Promise<ContactsResponse> {
  const res = await fetch(
    `${CONTACTS_API_PATH}?page=${page}&pageSize=${pageSize}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }
  return res.json();
}

export async function getContactById(id: number) {
  const res = await fetch(`${CONTACTS_API_PATH}?id=${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch contact");
  }
  return res.json();
}
