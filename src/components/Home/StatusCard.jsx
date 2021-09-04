import React from "react";

function StatusCard({ title, value, svg }) {
  return (
    <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 shadow-lg">
      <div>
        <span className="text-sm font-semibold text-gray-400">{title}</span>
        <h1 className="text-2xl font-bold">{value}</h1>
      </div>
      <div>{svg}</div>
    </div>
  );
}

export default StatusCard;
