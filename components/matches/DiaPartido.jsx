import React from "react";

export const DiaPartido = ({ shedule }) => {
  const date = new Date(shedule);
  const dayOfWeek = date.getDay();
  const time =
    date.getHours() + ":" + date.getMinutes().toString().padStart(2, "0");

  const dayOfWeekSpanish = ["Dom", "Lun", "Mar", "Miér", "Jue", "Vie", "Sáb"][
    dayOfWeek
  ];

  return (
    <div className="text-center">
      <div className="text-xs">{dayOfWeekSpanish}</div>
      <div className="text-xs">{time}</div>
    </div>
  );
};
