"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

type Toast = {
  message: string;
  severity?: "error" | "success" | "info" | "warning";
};

const ToastContext = createContext<(t: Toast) => void>(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<Toast>({ message: "", severity: "info" });

  const show = (t: Toast) => {
    setToast(t);
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={show}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
}
