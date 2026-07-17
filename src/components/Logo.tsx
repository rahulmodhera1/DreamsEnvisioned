import Image from "next/image";

const ASPECT = 511 / 358;

export function Logo({
  width = 44,
  className = "",
}: {
  width?: number;
  className?: string;
}) {
  const height = Math.round(width / ASPECT);

  return (
    <Image
      src="/logo/mark-icon.png"
      alt=""
      width={width}
      height={height}
      className={`select-none ${className}`}
      style={{
        filter:
          "drop-shadow(1px 1px 0.5px rgba(0,0,0,0.85)) drop-shadow(-1px -1px 0.5px rgba(255,255,255,0.1))",
      }}
      priority
    />
  );
}
