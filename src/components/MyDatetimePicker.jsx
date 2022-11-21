import { useEffect, useRef, useState } from "react";
// Components
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import format from "date-fns/format";

const MyDatetimePicker = () => {
  // States, variables, ref
  const [selectedDate, setSelectedDate] = useState("");
  const [show, setShow] = useState(false);
  const calendarRef = useRef(null);
  // Effects
  useEffect(() => {
    setSelectedDate(format(new Date(), "MM/dd/yyyy"));
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

  const handleSelect = (date) => {
    setSelectedDate(format(date, "MM/dd/yyyy"));
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
        value={selectedDate}
        onClick={handleToggleShow}
        readOnly
        className="min-w-[332px] p-4 outline-none border border-solid border-gray-200 cursor-pointer rounded-md"
      />

      <div className="calendar-element">
        {show && <Calendar date={new Date()} onChange={handleSelect} />}
      </div>
    </div>
  );
};

export default MyDatetimePicker;
