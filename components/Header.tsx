"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);
  return <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
    <a className="skip" href="#main">Skip to content</a>
    <div className="container nav-wrap">
      <a href="/" className="logo" aria-label="Peturn home"><Image src="/brand/peturn-logo.png" alt="Peturn — Turn Data Into Growth" width={340} height={138} priority /></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a className={pathname === item.href ? "active" : ""} key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a className="button nav-cta" href="/contact">Book a Free Consultation</a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
      {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      <a className="button" href="/contact" onClick={() => setOpen(false)}>Book a Free Consultation</a>
    </nav>
  </header>;
}
