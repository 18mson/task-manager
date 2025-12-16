type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const Input = ({ value, onChange, placeholder }: InputProps) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border p-2 rounded w-full"
  />
)