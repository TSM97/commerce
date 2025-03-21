const EmailIcon = ({
  className,
  ...props
}: {
  className?: string; // Optional className prop
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 -2.5 20 20"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 12.474 0 3.649V15h20V3.649l-10 8.825Zm.001-2.662L0 .981V0h20v.981l-9.999 8.831Z"
    />
  </svg>
);
export default EmailIcon;
