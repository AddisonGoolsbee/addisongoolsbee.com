import { createEffect } from "solid-js";
import { useLocation } from "@solidjs/router";

export function useCanonical() {
  const location = useLocation();

  createEffect(() => {
    const canonicalLink = document.getElementById("canonical-link") as HTMLAnchorElement;
    if (canonicalLink) {
      canonicalLink.href = `https://addisongoolsbee.com${location.pathname}`;
    }
  });
}
