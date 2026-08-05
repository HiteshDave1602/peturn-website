"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll("#main > section:not(#why-us)");
    sections.forEach((el) => el.classList.add("reveal-section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
