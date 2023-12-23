export default function OutlineButton({
  children,
  handleClick,
  className,
  type = "button",
}: {
  children: JSX.Element | string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      className={`border-space-100 hover:bg-space-50 hover:text-space-900 flex w-full items-end justify-center rounded-md border p-2 transition-colors duration-200 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}


