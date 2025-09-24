
"use client";
import { Button } from "@mui/material";
import { TabButtonProps } from "./TabButton.type";

export function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <Button  fullWidth variant={active ? "contained" : "outlined"} onClick={onClick}>
      {children}
    </Button>
  );
}
