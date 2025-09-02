import React from 'react';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const HealthTrends = () => {
  const trends = [
    { label: 'Heart Rate', value: '72 BPM', trend: 'up', change: '+2.5%' },
    { label: 'Blood Pressure', value: '120/80', trend: 'down', change: '-1.2%' },
    { label: 'Temperature', value: '98.6°F', trend: 'stable', change: '0%' },
    { label: 'Oxygen Level', value: '98%', trend: 'up', change: '+0.5%' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Health Trends</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
      </div>
      
      <div className="space-y-4">
        {trends.map((trend, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                {trend.trend === 'up' ? (
                  <FiTrendingUp className="h-5 w-5 text-green-500" />
                ) : trend.trend === 'down' ? (
                  <FiTrendingDown className="h-5 w-5 text-red-500" />
                ) : (
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{trend.label}</p>
                <p className="text-lg font-semibold text-gray-800">{trend.value}</p>
              </div>
            </div>
            <span className={`text-sm font-medium ${
              trend.trend === 'up' ? 'text-green-600' : 
              trend.trend === 'down' ? 'text-red-600' : 
              'text-gray-600'
            }`}>
              {trend.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTrends;
