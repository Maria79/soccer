import React from "react";

const SerieA = ({ seriaA }) => {
  const channelList = premier.map((c) => c.channels);

  return (
    <>
      <div>
        <h3>Inglaterra - Premier League</h3>
      </div>
      {premier.map((m) => (
        <div key={m.id}>
          <div className="flex gap-y-2 px-2 py-1 border border-1 border-slate-300 ">
            <div className="w-[100px]">
              <span>
                {m.hour}:{m.minute}
              </span>{" "}
              {m.live_minute > 0 || m.live_minute === "Des" ? (
                <span className="text-sm  text-red-400 pl-1 ">
                  {m.live_minute}&apos;
                </span>
              ) : null}
            </div>

            <div className="w-[80px]">
              <div>{m.result}</div>
            </div>

            <div className="w-2/5">
              {m.local} vs {m.visitor}{" "}
            </div>

            <div className="w-2/5 flex gap-x-1">
              <div className="flex gap-x-2 text-sm truncate">
                {[...new Set(m.channels.map((c) => c.name))].map(
                  (uniqueName) => (
                    <div key={uniqueName}>
                      <div>{uniqueName}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Premier;
