import { useEffect } from "react";

function useOutsideClickHandler(
  handleClickOutside: (
    event: MouseEvent | FocusEvent | KeyboardEvent | TouchEvent,
  ) => void,
) {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("blur", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("blur", handleClickOutside);
    };
  });
}

export { useOutsideClickHandler };
