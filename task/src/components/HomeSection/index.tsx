"use client";
import { Box } from "@mui/material";
import { HomeClient } from "../HomeClient";
import { HomeSectionProps } from "./HomeSection.type";

export function HomeSection({ showVisited = false }: HomeSectionProps) {
  return (
    <Box>
      <HomeClient showVisited={showVisited} />
    </Box>
  );
}
