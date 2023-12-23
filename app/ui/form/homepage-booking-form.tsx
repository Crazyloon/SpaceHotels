import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  InlineBookingForm,
  InlineBookingFormStep,
  InlineBookingFormSubmission,
} from "./inline-booking-form";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faChild, faKey, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRangePicker, ShowDateButton } from "../datepicker";
import { addDays, setDate } from "date-fns";
import { SetStateAction, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import OutlineButton from "../components/outline-button";
import NumberPicker from "../components/number-picker";

const RangePickerHeading = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <FontAwesomeIcon icon={faCalendarDays} /> <span>Arrival / Departure</span>
    </div>
  );
};

export default function HomePageBookingForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });
  const [adults, setAdults] = useState<number>(0);
  const [kids, setKids] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(0);

  return (
    <aside className="absolute flex w-full -translate-y-80 justify-center">
      <InlineBookingForm
        handleSubmit={() => {}}
        className="shadow-space-950/60 z-10 shadow-lg"
      >
        <InlineBookingFormStep
          heading={<RangePickerHeading />}
          input={
            <DateRangePicker
              showDateButton={
                <ShowDateButton
                  dateRange={dateRange}
                  handleClick={() => setIsVisible(!isVisible)}
                  buttonText={"Select Dates"}
                />
              }
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
          }
        />
        <InlineBookingFormStep
          icon={<FontAwesomeIcon icon={faPerson} />}
          heading="Adults"
          input={<NumberPicker value={adults} setValue={setAdults} />}
        />
        <InlineBookingFormStep
          icon={<FontAwesomeIcon icon={faChild} />}
          heading="Children"
          input={<NumberPicker value={kids} setValue={setKids} />}
        />
        <InlineBookingFormStep
          icon={<FontAwesomeIcon icon={faKey} />}
          heading="Rooms"
          input={<NumberPicker value={rooms} setValue={setRooms} />}
          showTriangle
        />
        <InlineBookingFormSubmission />
      </InlineBookingForm>
    </aside>
  );
}
