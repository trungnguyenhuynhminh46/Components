import { useEffect, useRef, useState } from "react";
// Components
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns/esm";

const MyAdvancedDateRangePicker = () => {
  // States, variables, ref
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [show, setShow] = useState(false);
  const calendarRef = useRef(null);
  // Effects
  useEffect(() => {
    // Events listeners
    document.addEventListener("keydown", hideOnEsc, true);
    document.addEventListener("click", hideOnClickOutSide, true);
  }, []);
  // Functions, Handlers

  const hideOnEsc = (e) => {
    if (e.key === "Escape") {
      setShow(false);
    }
  };

  const hideOnClickOutSide = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  const handleToggleShow = () => {
    setShow((show) => {
      return !show;
    });
  };

  return (
    <div ref={calendarRef} className="relative inline-flex flex-col gap-4">
      <input
        type="text"
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        onClick={handleToggleShow}
        readOnly
        className="min-w-[332px] p-4 outline-none border border-solid border-gray-200 cursor-pointer rounded-md"
      />

      <div className="calendar-element">
        {show && (
          <DateRangePicker
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default MyAdvancedDateRangePicker;
