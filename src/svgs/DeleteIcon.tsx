const DeleteIcon = ({
  className,
  ...props
}: {
  className?: string; // Optional className prop
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={35}
    height={35}
    fill='none'
    viewBox='0 0 24 24'
    className={className}
    {...props}
  >
    <path
      stroke='#dc2626'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M10 11v6M14 11v6M4 7h16M6 7h12v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7ZM9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z'
    />
  </svg>
);
export default DeleteIcon;
