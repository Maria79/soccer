import React from "react";
import Liga from "../matches/Liga";
import Premier from "../matches/Premier";

export const Matchday = ({ laLiga, premier }) => {
  const liga = laLiga.matches;
  const premierLeague = premier.matches;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* LaLiga */}
        <Liga laLiga={liga} />
        <div></div>
        {/* Premier */}
        <Premier premier={premierLeague} />
      </div>
    </>
  );
};

export default Matchday;
