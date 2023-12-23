import React, { useEffect } from "react";

function useOutsideClickHandler(
  handleClickOutside: (event: MouseEvent) => void
) {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export { useOutsideClickHandler };
