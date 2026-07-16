import Image from "next/image";

export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo/mark.jpg"
      alt="DreamsEnvisioned"
      width={size}
      height={size}
      className={`rounded-full border border-gold/70 ${className}`}
      priority
    />
  );
}
