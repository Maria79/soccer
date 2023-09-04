import React from "react";

const Revenue = ({ ganancias, quiniela }) => {
  const euro = Intl.NumberFormat("es-Es", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <>
      <div className="mb-4">
        <h2>
          Ganancias: <span>{euro.format(ganancias)}</span>
        </h2>
        <h2>
          Jackpot: <span>{euro.format(quiniela.jackpot)}</span>
        </h2>
        <h2>
          Total de apuestas: <span>{euro.format(quiniela.total_bets)}</span>
        </h2>
      </div>
    </>
  );
};

export default Revenue;
