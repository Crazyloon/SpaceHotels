import OutlineButton from "../components/outline-button";

const FormStepClasses =
  "min-h-32 min-w-60 relative flex flex-col items-center p-4";
const triangleClasses =
  "after:border-l-space-700 after:absolute after:left-full after:h-0 after:w-0 after:border-y-[20px] after:border-l-[12px] after:border-r-0 after:border-solid after:border-y-transparent after:content-[''] after:-mt-4 after:top-1/2 after:-translate-y-1";

const InlineBookingForm = ({
  children,
  className,
  handleSubmit,
}: {
  children: JSX.Element[];
  className?: string;
  handleSubmit?: React.FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form onSubmit={handleSubmit} className={`flex ${className}`}>
      {...children}
    </form>
  );
};

const InlineBookingFormStep = ({
  icon,
  heading,
  input,
  showTriangle,
}: {
  icon?: JSX.Element;
  heading: JSX.Element | string;
  input: JSX.Element;
  showTriangle?: boolean;
}) => {
  return (
    <div
      className={`bg-space-700 relative justify-between ${FormStepClasses} ${
        showTriangle ? `${triangleClasses}` : ""
      }`}
    >
      <div className="flex gap-4">
        {icon ? <span>{icon}</span> : null}
        <span>{heading}</span>
      </div>
      {input}
    </div>
  );
};

const InlineBookingFormSubmission = () => {
  const c = () => console.log("test");

  return (
    <div
      className={`${FormStepClasses} bg-space-100 p-0 -z-10 h-full justify-center`}
    >
      <OutlineButton
        type="submit"
        className="uppercase h-full items-center"
        handleClick={c}
      >
        Find a Room
      </OutlineButton>
    </div>
  );
};

export {
  InlineBookingForm,
  InlineBookingFormStep,
  InlineBookingFormSubmission,
};
