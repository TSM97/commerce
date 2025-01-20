const ContactOutline = ({
  className,
  ...props
}: {
  className?: string; // Optional className prop
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" {...props}>
    <path
      fill="none"
      stroke="hsl(0, 0%, 20%)"
      className={className}
      {...props}
      strokeWidth={3}
      d="M433.9 493.98c-28.14 32.46-53.664 39.266-102.88 43.193-49.214 3.926-148.56 33.639-192.407-19.634-43.849-53.272-74.084-223.43-70.681-300 3.403-76.57 27.88-133.377 91.1-159.424 63.22-26.047 231.413-44.24 288.22 3.142 56.806 47.382 54.842 209.031 52.617 281.151-2.225 72.12-37.827 119.11-65.968 151.571-28.142 32.46-53.665 39.267-102.88 43.194"
    />
  </svg>
);
export default ContactOutline;
