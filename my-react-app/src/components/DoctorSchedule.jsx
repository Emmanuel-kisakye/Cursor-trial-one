import React from 'react';
import { FiClock, FiUser, FiMapPin } from 'react-icons/fi';

const DoctorSchedule = () => {
  const appointments = [
    { time: '09:00 AM', doctor: 'Dr. Sarah Johnson', patient: 'John Doe', room: 'Room 101' },
    { time: '10:30 AM', doctor: 'Dr. Michael Chen', patient: 'Jane Smith', room: 'Room 205' },
    { time: '02:00 PM', doctor: 'Dr. Emily Davis', patient: 'Bob Wilson', room: 'Room 150' },
    { time: '03:30 PM', doctor: 'Dr. Sarah Johnson', patient: 'Alice Brown', room: 'Room 101' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Today's Schedule</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
      </div>
      
      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 text-blue-600">
              <FiClock className="h-4 w-4" />
              <span className="text-sm font-medium">{appointment.time}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <FiUser className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-900">{appointment.doctor}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{appointment.patient} • {appointment.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSchedule;
