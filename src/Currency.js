import React from "react";

export default function Currency({ cur }) {
  let color = {
    color: cur.color
  };

  return (
    <div className="card text-center shadow">
      <div className="mx-auto py-2">
        <img
          src={cur.iconUrl}
          alt={cur.name}
          width="48"
          height="48"
          className="img-fluid rounded"
        />
        <h5 className="card-title py-1" style={color}>
          {cur.name}{" "}
          <span class="badge badge-pill badge-primary px-2">{cur.symbol}</span>{" "}
        </h5>
        <div className="card-body">
          <div className="card-text">
            Markets: <code>{cur.numberOfMarkets}</code>
          </div>
          <div className="card-text">
            Exchanges: <code>{cur.numberOfExchanges}</code>
          </div>
          <div className="card-text">
            present price: <code>${Math.floor(cur.price)}</code>
          </div>
          <div className="card-text">
            all time high: <code>${Math.floor(cur.allTimeHigh.price)}</code>
          </div>
        </div>
        <a
          href={cur.websiteUrl}
          className="btn btn-primary btn-sm mb-2"
      
          target="_blank">
          view
        </a>
      </div>
    </div>
  );
}
