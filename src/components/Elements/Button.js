const Button = ({ type, children }) => {
  return (
    <div>
      <button
        type={type}
        className="bg-blue-500 text-white w-full mt-6 h-[48px] rounded-[10px]"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
