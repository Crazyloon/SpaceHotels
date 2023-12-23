import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import OutlineButton from "./outline-button";

export default function NumberPicker({
  value,
  setValue,
  className,
}: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 w-full justify-center gap-8 items-end p-2 ${className}`}
    >
      <span className={`text-3xl flex-grow flex-shrink place-self-end`}>
        {value}
      </span>
      <div className="flex flex-col gap-1 flex-grow flex-shrink">
        <OutlineButton
          type="button"
          className="border w-1/2 rounded-md px-2 py-0 justify-self-end text-sm"
          handleClick={() => setValue((value) => value + 1)}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </OutlineButton>
        <OutlineButton
          type="button"
          className="border w-1/2 rounded-md px-2 py-0 justify-self-end text-sm"
          handleClick={() => setValue((value) => value - 1)}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </OutlineButton>
      </div>
    </div>
  );
}
