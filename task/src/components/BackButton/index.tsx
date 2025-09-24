"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  label?: string;
};

export default function BackButton({ label = "بازگشت" }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button variant="outlined" onClick={() => router.back()}>
      {label}
    </Button>
  );
}
