export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Medical cross with laser beam */}
      <circle cx="50" cy="50" r="45" fill="#0077b6" />
      <rect x="42" y="20" width="16" height="60" rx="2" fill="white" />
      <rect x="20" y="42" width="60" height="16" rx="2" fill="white" />
      <path
        d="M50 30 L70 45 L50 60 L30 45 Z"
        fill="#48cae4"
        opacity="0.6"
      />
      <circle cx="50" cy="45" r="8" fill="white" />
    </svg>
  );
}
