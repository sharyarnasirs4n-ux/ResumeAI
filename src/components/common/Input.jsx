function Input({label, value, onChange, placeholder, type="text"}) {

  return (
    <div className="space-y-1">

      <label className="text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
        className="
        w-full
        px-4
        py-3
        rounded-xl
        border
        border-gray-200
        focus:ring-2
        focus:ring-blue-500
        outline-none
        "
      />

    </div>
  );
}

export default Input;