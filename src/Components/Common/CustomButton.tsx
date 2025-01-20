import { NavHashLink } from "react-router-hash-link";

type CustomButtonProps = {
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  target?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  elementType?: "button" | "anchorTag" | "navLink";
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  href,
  ariaLabel,
  children,
  target = "blank",
  to,
  className = "",
  type = "button",
  elementType = "button",
  disabled = false,
  ...props
}) => {
  switch (elementType) {
    case "button":
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
    case "anchorTag":
      return (
        <a
          target={target}
          href={href}
          aria-label={ariaLabel}
          onClick={onClick}
          className={`rounded-2xl cursor-pointer border-2 border-dashed border-black bg-white px-2 md:px-6 py-1 md:py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${className}`}
          {...props}
        >
          {children}
        </a>
      );
    case "navLink":
      return (
        <NavHashLink
          className={`rounded-2xl cursor-pointer border-2 border-dashed border-black bg-white px-2 md:px-6 py-1 md:py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${className}`}
          onClick={onClick}
          to={`${to}`}
          {...props}
        >
          {children}
        </NavHashLink>
      );
  }
};

export default CustomButton;
