export function SectionHeading({ eyebrow, title, text, align = "center" }: { eyebrow?: string; title: string; text?: string; align?: "center" | "left" }) {
  return <div className={`section-heading ${align}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>{text && <p>{text}</p>}
  </div>;
}
