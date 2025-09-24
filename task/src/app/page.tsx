"use client";
import { Box } from "@mui/material";
import { TabButton } from "@/components/TabButton";
import { HomeSection } from "@/components/HomeSection";
import { useHomeView } from "@/hooks/useHomeView";

export default function HomePage() {
  const { showVisited, showAll, selectVisited, selectAll } = useHomeView();

  return (
    <Box>
      <Box display="flex" justifyContent="center" gap="20px">
        <TabButton active={showVisited} onClick={selectVisited}>
          پربازدیدها
        </TabButton>
        <TabButton active={showAll} onClick={selectAll}>
          صفحه اصلی
        </TabButton>
      </Box>

      {showVisited && <HomeSection showVisited />}
      {showAll && <HomeSection showVisited={false} />}
    </Box>
  );
}
