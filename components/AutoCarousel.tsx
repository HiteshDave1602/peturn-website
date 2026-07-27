"use client";

import { Children, type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type AutoCarouselProps = {
  children: ReactNode;
  className: string;
  count: number;
  label: string;
  showArrows?: boolean;
  loopArrows?: boolean;
};

export function AutoCarousel({ children, className, count, label, showArrows = false, loopArrows = true }: AutoCarouselProps) {
  const items = useMemo(() => Children.toArray(children), [children]);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [stepSize, setStepSize] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateStepSize = () => {
      const firstItem = trackRef.current?.querySelector<HTMLElement>(".auto-carousel-item");
      if (!firstItem) return;
      const styles = window.getComputedStyle(trackRef.current!);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      setStepSize(firstItem.offsetWidth + gap);
    };

    updateStepSize();
    window.addEventListener("resize", updateStepSize);
    return () => window.removeEventListener("resize", updateStepSize);
  }, [items.length]);

  useEffect(() => {
    if (isPaused || count <= 1) return;
    const interval = window.setInterval(() => setIndex((current) => current + 1), 3600);
    return () => window.clearInterval(interval);
  }, [count, isPaused]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const pauseTemporarily = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 4500);
  };

  const handleTransitionEnd = () => {
    if (index < count) return;
    setIsResetting(true);
    setIndex(0);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsResetting(false)));
  };

  const goTo = (nextIndex: number) => {
    pauseTemporarily();
    setIndex(nextIndex);
  };

  const goPrevious = () => {
    pauseTemporarily();
    setIndex((current) => {
      const currentIndex = current % count;
      if (!loopArrows && currentIndex <= 0) return current;
      return currentIndex <= 0 ? count - 1 : current - 1;
    });
  };

  const goNext = () => {
    pauseTemporarily();
    setIndex((current) => {
      const currentIndex = current % count;
      if (!loopArrows && currentIndex >= count - 1) return current;
      return current + 1;
    });
  };

  const currentIndex = index % count;
  const showPreviousArrow = showArrows && (loopArrows || currentIndex > 0);
  const showNextArrow = showArrows && (loopArrows || currentIndex < count - 1);

  return <div
    className="auto-carousel"
    aria-label={`${label} carousel`}
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    onTouchStart={pauseTemporarily}
  >
    {showPreviousArrow && <button type="button" className="carousel-arrow carousel-arrow-prev" onClick={goPrevious} aria-label={`Show previous ${label} item`}><ChevronLeft size={22}/></button>}
    <div
      ref={trackRef}
      className={`${className} auto-carousel-track${isResetting ? " is-resetting" : ""}`}
      style={{ transform: `translate3d(-${index * stepSize}px,0,0)` }}
      onTransitionEnd={handleTransitionEnd}
    >
      {[...items, ...items].map((item, itemIndex) => <div className="auto-carousel-item" key={itemIndex}>{item}</div>)}
    </div>
    {showNextArrow && <button type="button" className="carousel-arrow carousel-arrow-next" onClick={goNext} aria-label={`Show next ${label} item`}><ChevronRight size={22}/></button>}
    <div className="carousel-dots" aria-label={`${label} carousel controls`}>
      {items.map((_, dotIndex) => <button
        type="button"
        key={dotIndex}
        aria-label={`Show ${label} item ${dotIndex + 1}`}
        aria-current={index % count === dotIndex}
        onClick={() => goTo(dotIndex)}
      />)}
    </div>
  </div>;
}
