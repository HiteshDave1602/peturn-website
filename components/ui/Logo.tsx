import Image from "next/image";
import { brand } from "@/data/brand-config";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src={brand.logo.src}
      alt={brand.logo.alt}
      width={compact ? 230 : brand.logo.width}
      height={compact ? 92 : brand.logo.height}
      sizes={compact ? "230px" : "180px"}
      priority={!compact}
    />
  );
}
