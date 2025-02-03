const Checkbox = ({
  label,
  ClassName,
  isChecked,
  handleCheck,
}: {
  label: string;
  ClassName?: string;
  isChecked: boolean;
  handleCheck: any;
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`min-w-6 min-h-6 flex items-center justify-center border-2 rounded-md border-gray-300 cursor-pointer ${
          isChecked ? `bg-primary-500 border-primary-500 ${ClassName}` : ""
        } transition-all duration-300 `}
        onClick={handleCheck}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <label className="ml-3 text-md md:text-lg text-black-250">{label}</label>
    </div>
  );
};

export default Checkbox;
