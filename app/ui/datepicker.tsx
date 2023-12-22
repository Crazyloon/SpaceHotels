"use client";

import { Montagu_Slab } from "next/font/google";
import { useRef, useState } from "react";
import { format } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useOutsideAlerter } from "./hooks/use-outside-alerter";
import OutlineButton from "./components/outline-button";

const monagu = Montagu_Slab({ weight: "400", subsets: ["latin"] });
const FormattedDate = (dateRange: DateRange | undefined) => {
  return dateRange ? (
    <>
      {dateRange.from ? (
        <>
          <span className={`text-3xl ${monagu.className}`}>
            {format(dateRange?.from, "d")}
          </span>
          <span className="leading-8">{format(dateRange?.from, "LLL")}</span>
        </>
      ) : (
        "..."
      )}
      <span className="mx-2 leading-8">to</span>
      {dateRange.to ? (
        <>
          <span className={`text-3xl ${monagu.className}`}>
            {format(dateRange?.to, "d")}
          </span>
          <span className="leading-8">{format(dateRange?.to, "LLL")}</span>
        </>
      ) : (
        "..."
      )}
    </>
  ) : undefined;
};

const DateRangePicker = ({
  showDateButton,
  isVisible,
  setIsVisible,
  dateRange,
  setDateRange,
}: {
  showDateButton: JSX.Element;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dateRange: DateRange | undefined;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}) => {
  const btnRef = useRef<any>(null);
  function handleClickOutside(event: MouseEvent) {
    if (btnRef.current && !btnRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  }
  useOutsideAlerter(handleClickOutside);

  return (
    <>
      {isVisible ? (
        <div ref={btnRef} className="bg-space-800 absolute z-40 p-1">
          <DayPicker
            showOutsideDays
            fixedWeeks
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
          />
        </div>
      ) : null}
      {showDateButton}
    </>
  );
};

const ShowDateButton = ({
  dateRange,
  handleClick,
  buttonText,
}: {
  dateRange: DateRange | undefined;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}) => {
  const formattedDate = FormattedDate(dateRange);

  return (
    <OutlineButton handleClick={handleClick}>
      <>{formattedDate ? formattedDate : buttonText}</>
    </OutlineButton>
  );
};

export { DateRangePicker, ShowDateButton };
