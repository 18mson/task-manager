type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit"
}

export const Button = ({ children, onClick, type = "button" }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
  >
    {children}
  </button>
)