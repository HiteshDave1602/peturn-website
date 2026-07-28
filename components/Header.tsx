"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/MobileNav";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <a className="skip" href="#main">Skip to content</a>
      <div className="container nav-wrap">
        <Link href="/" className="logo" aria-label="Peturn home"><Logo /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a className={pathname === item.href ? "active" : ""} key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink className="nav-cta" href="/contact#start-conversation">Book a Free Consultation</ButtonLink>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <MobileNav open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}
