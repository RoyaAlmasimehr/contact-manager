"use client";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import { Contact } from "@/types/contact";
import { formatContactDate } from "@/utils";

export default function ContactDetails({ contact }: { contact: Contact }) {
  return (
    <Card sx={{ maxWidth: 400,  mt: 4 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar >
            {contact.name?.[0]}
          </Avatar>
          <Box>
            <Typography variant="h6">{contact.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {contact.company}
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography>Email: {contact.email }</Typography>
          <Typography>Phone: {contact.phone }</Typography>
          <Typography variant="caption" color="text.secondary">
            Joined:
           {formatContactDate(contact)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
