const InfoIcon = ({
  className,
  children,
  ...props
}: {
  className?: string; // Optional className prop
  children?: React.ReactNode; // Optional children prop
}) => (
  <div className='relative group'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={800}
      height={800}
      fill='none'
      viewBox='0 0 24 24'
      {...props}
      className={className}
    >
      <path
        stroke='#1C274C'
        strokeLinecap='round'
        strokeWidth={1.5}
        d='M12 17v-6'
      />
      <circle
        cx={1}
        cy={1}
        r={1}
        fill='#1C274C'
        transform='matrix(1 0 0 -1 11 9)'
      />
      <path
        stroke='#1C274C'
        strokeLinecap='round'
        strokeWidth={1.5}
        d='M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5'
      />
    </svg>
    {children}
  </div>
);
export default InfoIcon;
