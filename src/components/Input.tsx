type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
  error?: string
  autoFocus?: boolean
  type?: string
}

export default function Input({ value, onChange, placeholder, label, error, autoFocus, type = 'text' }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={type}
        className={`border p-2 rounded w-full ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}