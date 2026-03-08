import { useEffect, useState } from "react";

export default function useNavItemActive(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let closestId = "";
      let closestDistance = Infinity;
      let lastFullyVisibleId = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top, bottom } = element.getBoundingClientRect();

        // check if element is fully visible
        if (top >= 0 && bottom <= window.innerHeight) {
          lastFullyVisibleId = id;
        }

        // fallback: closest top to viewport top
        const distance = Math.abs(top);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      }

      if (lastFullyVisibleId) {
        setActiveId(lastFullyVisibleId);
      } else if (closestId) {
        setActiveId(closestId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}