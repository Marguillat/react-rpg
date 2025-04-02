function Input({ label, value, onChange, onChangeText, ...props }) {
  const handleChange = () => {
    if (onChange) onChange(event);
    if (onChangeText) onChangeText(event.target.value);
  };
  return (
    <label className="flex flex-col gap-0.5">
      {label}
      <input
        {...props}
        value={value}
        onChange={handleChange}
        className="
        border rounded-sm
        border-neutral-300
        py-1 px-1
        outline-0
        focus:border-neutral-700
        hover:border-neutral-400
        transition-all
        transition-smooth
        "
      />
    </label>
  );
}

export default Input;
