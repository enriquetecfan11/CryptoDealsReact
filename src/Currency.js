import React from "react";

export default function Currency({ cur }) {
  let color = {
    color: cur.color
  };

  return (
    <div className="card text-center bg-info">
      <h5 className="card-title py-1">
        {cur.name}{" "}
        {cur.symbol}{" "}
      </h5>
      <div className="mx-auto py-2">
        <img
          src={cur.iconUrl}
          alt={cur.name}
          width="70"
          height="70"
          className="img-fluid rounded"
        />
        <div className="card-body">
        <div className="card-text">
            Precio: <code>${Math.floor(cur.price)}</code>
          </div>
          <div className="card-text">
            Precio Mas Alto: <code>{cur.numberOfMarkets}</code>
          </div>
          <div className="card-text">
            Intercambios por min: <code>{cur.numberOfExchanges}</code>
          </div>
          <div className="card-text">
            Subida ma alta en todo el tiempo: <code>${Math.floor(cur.allTimeHigh.price)}</code>
          </div>
        </div>
      </div>
    </div>
  );
}
