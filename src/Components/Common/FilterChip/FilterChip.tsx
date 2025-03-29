export default function FilterChip({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode | string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center m-1 px-2 py-1 rounded-full text-base bg-primary-250 text-white font-medium ${className}`}
    >
      <div className="flex-initial max-w-full leading-none text-sm font-normal">
        {children}
      </div>
    </div>
  );
}
