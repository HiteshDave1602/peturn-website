"use client";

export function BackToTopButton() {
  return (
    <button
      type="button"
      className="back-to-top-link"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Back to top ↑
    </button>
  );
}
