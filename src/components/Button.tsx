type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  variant?: "primary" | "secondary" | "danger"
  size?: "sm" | "md"
  title?: string
  className?: string
}

export const Button = ({ children, onClick, type = "button", variant = "primary", size = "md", title, className }: ButtonProps) => {
  let variantClass = "bg-blue-600 hover:bg-blue-700 text-white";
  if (variant === "secondary") variantClass = "bg-gray-200 text-gray-900 hover:bg-gray-300";
  if (variant === "danger") variantClass = "bg-red-600 hover:bg-red-700 text-white";

  let sizeClass = "px-4 py-2";
  if (size === "sm") sizeClass = "px-2 py-1 text-sm";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded ${variantClass} ${sizeClass} text-gray transition-colors cursor-pointer ${className}`}
      title={title}
    >
      {children}
    </button>
  );
}