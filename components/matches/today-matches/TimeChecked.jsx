import React from "react";

export const TimeChecked = ({ hour, minute, result, status }) => {
  const madridTime = hour + ":" + minute;
  const targetTimeZone = "Europe/London";

  const [hours, minutes] = madridTime.split(":").map(Number);

  const sourceDate = new Date();
  sourceDate.setHours(hours);
  sourceDate.setMinutes(minutes);
  sourceDate.setHours(sourceDate.getHours() - 1);

  // Format the resulting time in "HH:mm" format using London time zone
  const londonTime = sourceDate.toLocaleTimeString("en-US", {
    timeZone: targetTimeZone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  function checked() {
    if (status === 1) {
      return (
        <div className="text-lg">
          <span>{result}</span>
        </div>
      );
    } else if (status === 0) {
      return (
        <div className="text-lg text-green-400">
          {result === "x-x" ? "0-0" : result}
        </div>
      );
    } else if (status === -1) {
      return (
        <div className="text-xl text-neutral-800">
          <span>{londonTime}</span>
        </div>
      );
    } else {
      return (
        <div className="text-lg text-amber-400">
          <span>{londonTime}</span>
        </div>
      );
    }
  }

  const show = checked();

  return <div className="w-[50px] flex justify-center">{show}</div>;
};
