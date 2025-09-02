import React from 'react';
import { FiVideo, FiUsers, FiCalendar } from 'react-icons/fi';

const DoctorConference = () => {
  const conferences = [
    { 
      title: 'Weekly Medical Review', 
      time: '2:00 PM - 3:00 PM', 
      participants: 12,
      type: 'video'
    },
    { 
      title: 'Emergency Protocol Meeting', 
      time: '4:30 PM - 5:00 PM', 
      participants: 8,
      type: 'in-person'
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Doctor Conferences</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">Schedule</button>
      </div>
      
      <div className="space-y-4">
        {conferences.map((conference, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900">{conference.title}</h4>
              <div className="flex items-center space-x-1">
                {conference.type === 'video' ? (
                  <FiVideo className="h-4 w-4 text-blue-500" />
                ) : (
                  <FiUsers className="h-4 w-4 text-green-500" />
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <FiCalendar className="h-4 w-4" />
                <span>{conference.time}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FiUsers className="h-4 w-4" />
                <span>{conference.participants} participants</span>
              </div>
            </div>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Join Conference
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorConference;
