type CustomButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`rounded-2xl cursor-pointer border-2 border-dashed border-black bg-white px-2 md:px-6 py-1 md:py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
