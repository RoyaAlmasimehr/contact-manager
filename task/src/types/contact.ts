export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  createdAt: string;
};

export type ContactsResponse = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  data: Contact[];
};
