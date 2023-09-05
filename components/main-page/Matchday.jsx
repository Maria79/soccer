import React from "react";
import Liga from "../matches/Liga";
import Premier from "../matches/Premier";

export const Matchday = ({ laLiga, premier }) => {
  // const liga = laLiga.matches;
  // console.log(liga);
  // const premierLeague = premier.matches;

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div></div>
        {/* <div>
          LaLiga
          <Liga laLiga={liga} />
          <div></div>
          Premier
          <Premier premier={premierLeague} />
        </div> */}
      </div>
    </>
  );
};

export default Matchday;
