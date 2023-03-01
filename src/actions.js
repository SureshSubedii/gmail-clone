import { isOpen } from "./types";

export const setBooleanValue = (value) => {
    return {
      type: isOpen,
      payload: value
    };
  };