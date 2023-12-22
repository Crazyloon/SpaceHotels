import React, { useEffect } from "react";

function useOutsideAlerter(handleClickOutside: (event: MouseEvent) => void) {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export { useOutsideAlerter };
