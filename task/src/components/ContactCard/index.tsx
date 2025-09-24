"use client";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import Link from "next/link";
import { Contact } from "@/types/contact";
import { CONTACTS_PATH } from "@/constants";

export default function ContactCard({ contact }: { contact: Contact }) {
  return (
    <Link href={`${CONTACTS_PATH}/${contact.id}`} style={{ textDecoration: "none" }}>
      <Card >
        <CardContent>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar>{contact.name?.[0] }</Avatar>
            <Box>
              <Typography variant="subtitle1">{contact.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {contact.company}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
