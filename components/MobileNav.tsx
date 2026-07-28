"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/Button";

export function MobileNav({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const pathname = usePathname();

  return (
    <nav id="mobile-menu" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
      {navigation.map((item) => (
        <Link key={item.href} href={item.href} onClick={onNavigate} className={pathname === item.href ? "active" : ""} aria-current={pathname === item.href ? "page" : undefined}>
          {item.label}
        </Link>
      ))}
      <ButtonLink href="/contact#start-conversation" onClick={onNavigate}>
        Book a Free Consultation
      </ButtonLink>
    </nav>
  );
}
