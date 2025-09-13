export default function Button({
  children,
  className = "",
  variant = "default",
  size = "base",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none";

  const variants = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline:
      "border border-zinc-300 text-zinc-800 hover:bg-zinc-100 bg-white",
  };

  const sizes = {
    base: "px-4 py-2 text-sm rounded-md",
    sm: "px-3 py-1.5 text-xs rounded-md",
    lg: "px-5 py-3 text-base rounded-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}