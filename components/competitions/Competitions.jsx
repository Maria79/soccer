import { getEuCompetitions } from "@/lib/getAllCompetitions";
import React from "react";

export const Competitions = async () => {
  const comptEuL = await getEuCompetitions();
  const comptEu = comptEuL.countries;

  //   console.log(comptEu);

  //   const orden = comptEu.map((c) => c.id);
  const sortedOrder = comptEu.sort((a, b) => a.id - b.id);
  console.log(sortedOrder);

  return (
    <div>
      <div>
        <h2>Competitions:</h2>
      </div>
      <div>
        {sortedOrder.map((c) => (
          <div key={c.id}>
            <div>
              {c.name}- {c.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
