import React from 'react';

const StatCard = ({ title, data1, data2 }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-sm font-medium text-gray-500 mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{data1.label}</span>
          <span className="text-lg font-semibold text-gray-900">{data1.value}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{data2.label}</span>
          <span className="text-lg font-semibold text-gray-900">{data2.value}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
