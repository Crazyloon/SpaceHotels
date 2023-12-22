import OutlineButton from "../components/outline-button";

const FormStepClasses =
  "min-h-32 min-w-60 relative flex flex-col items-center justify-between p-4";
const triangleClasses = "after:border-l-space-700 after:absolute after:left-full after:h-0 after:w-0 after:border-y-[20px] after:border-l-[12px] after:border-r-0 after:border-solid after:border-y-transparent after:content-['']";

const InlineBookingForm = ({
  children,
  className,
}: {
  children: JSX.Element[];
  className?: string;
}) => {
  return <form className={`flex ${className}`}>{...children}</form>;
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
      className={`bg-space-700 relative ${FormStepClasses} ${
        showTriangle
          ? "after:border-l-space-700 after:absolute after:left-full after:h-0 after:w-0 after:border-y-[20px] after:border-l-[12px] after:border-r-0 after:border-solid after:border-y-transparent after:content-['']"
          : ""
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
    <div className={`bg-space-100 -z-10 ${FormStepClasses}`}>
      <OutlineButton type="submit" className="uppercase" handleClick={c}>
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
