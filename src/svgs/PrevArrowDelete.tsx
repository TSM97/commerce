const PrevArrowDelete = ({
  className,
  ...props
}: {
  className?: string; // Optional className prop
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={80}
    fill="none"
    viewBox="0 0 24 24"
    className={className} // Apply the className here
    {...props}
  >
    <path
      stroke="#dc2626"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11 10 4 4m-4 0 4-4M2.772 13.518l4.666 4A2 2 0 0 0 8.74 18H18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8.74a2 2 0 0 0-1.302.481l-4.666 4a2 2 0 0 0 0 3.037Z"
    />
  </svg>
);
export default PrevArrowDelete;
