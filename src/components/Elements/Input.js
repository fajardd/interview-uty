const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-slate-200 mt-6 h-[48px] rounded-[10px] w-full px-3  hover:border-none"
    />
  );
};
export default Input;
