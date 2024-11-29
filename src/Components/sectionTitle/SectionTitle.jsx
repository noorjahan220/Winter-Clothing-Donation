import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center py-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-emerald-700">{title}</h1>
      {subtitle && <p className="mt-4 text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
