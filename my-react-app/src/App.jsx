import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import TopBar from './components/TopBar';
import StatCard from './components/StatCard';
import HealthTrends from './components/HealthTrends';
import DoctorSchedule from './components/DoctorSchedule';
import DoctorConference from './components/DoctorConference';
import { FiChevronDown } from 'react-icons/fi';

// Data for Stat Cards
const statCardData = [
  { title: 'Number of patients', data1: { label: 'Adult Patients', value: '547' }, data2: { label: 'Kids Patients', value: '372' } },
  { title: 'Daily Visit', data1: { label: 'Emergency Room', value: '78' }, data2: { label: 'Polyicnic', value: '243' } },
  { title: 'Room Capacity', data1: { label: 'Best Available', value: '12' }, data2: { label: 'Occupied Bed', value: '188' } },
];

function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-inter">
      <LeftSidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-6">

            {/* Left Column (Main) */}
            <div className="flex-1 lg:w-2/3">
              <nav className="flex space-x-8 border-b mb-6">
                 <a href="#" className="pb-3 border-b-2 border-blue-500 text-blue-500 font-semibold text-sm">Dashboard</a>
                 <a href="#" className="pb-3 text-gray-500 hover:text-gray-800 text-sm">Patient</a>
                 <a href="#" className="pb-3 text-gray-500 hover:text-gray-800 text-sm">Doctors and Staff</a>
                 <a href="#" className="pb-3 text-gray-500 hover:text-gray-800 text-sm">Room</a>
                 <a href="#" className="pb-3 text-gray-500 hover:text-gray-800 text-sm">Medicine</a>
                 <a href="#" className="pb-3 text-gray-500 hover:text-gray-800 text-sm">Analitik</a>
                 <a href="#" className="pb-3 text-gray-500 hover:text-gray-800 text-sm">Inventory</a>
              </nav>

              {/* Statistical Summary */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Statistical Summary</h2>
                    <button className="flex items-center space-x-1 text-sm bg-white px-3 py-1.5 rounded-md shadow-sm border">
                        <span>Week</span>
                        <FiChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {statCardData.map((data, index) => <StatCard key={index} {...data} />)}
                </div>
              </div>

              {/* Lower Section */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <HealthTrends />
                <DoctorSchedule />
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <aside className="lg:w-1/3 mt-6 lg:mt-0">
              <DoctorConference />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;