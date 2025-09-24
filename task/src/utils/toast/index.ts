import { toast } from "react-hot-toast";

export const showError = (message: string) => {
  toast.error(message, {
    position: "top-right",
    duration: 4000,
  });
};

export const showSuccess = (message: string) => {
  toast.success(message, {
    position: "top-right",
    duration: 3000,
  });
};
