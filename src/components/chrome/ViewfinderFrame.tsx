const bracketBase = "absolute h-6 w-6 sm:h-8 sm:w-8 border-gold";

export function ViewfinderFrame() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 hidden sm:block"
    >
      <span className={`${bracketBase} top-4 left-4 border-t-2 border-l-2`} />
      <span className={`${bracketBase} top-4 right-4 border-t-2 border-r-2`} />
      <span
        className={`${bracketBase} bottom-4 left-4 border-b-2 border-l-2`}
      />
      <span
        className={`${bracketBase} bottom-4 right-4 border-b-2 border-r-2`}
      />
    </div>
  );
}
