import { useEffect } from "react";

export const scrollUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
