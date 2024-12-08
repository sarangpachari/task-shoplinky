import React from "react";

const MainContent: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 h-full overflow-auto">
      {/* Dashboard Header */}
      <header className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          School Dashboard
        </h1>
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md shadow-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 text-sm md:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="hidden sm:inline">Add Record</span>
        </button>
      </header>

      {/* Dashboard Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Students</h2>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Teachers</h2>
          <p className="text-3xl font-bold text-green-600">85</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Classes</h2>
          <p className="text-3xl font-bold text-purple-600">40</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            Attendance Today
          </h2>
          <p className="text-3xl font-bold text-red-600">98%</p>
        </div>
      </section>

      {/* Recent Notices */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Notices
        </h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span>School Annual Day on Dec 20</span>
            <span className="text-sm text-gray-500">Posted 2 days ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>New Library Books Arrived</span>
            <span className="text-sm text-gray-500">Posted 4 days ago</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Monthly Parent-Teacher Meeting</span>
            <span className="text-sm text-gray-500">Posted 1 week ago</span>
          </li>
        </ul>
      </section>

      {/* Teacher and Student Lists */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Teachers */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Top Teachers
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Teacher"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Mr. Sharath Manohar</p>
                <p className="text-sm text-gray-500">Mathematics</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Teacher"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Mr. Soniya George</p>
                <p className="text-sm text-gray-500">Physics</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Top Students */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Top Students
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Student"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Arya Vinod</p>
                <p className="text-sm text-gray-500">Grade 10</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Student"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-700">Midhun Sreejith</p>
                <p className="text-sm text-gray-500">Grade 12</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Events
        </h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span>Winter Break</span>
            <span className="text-sm text-gray-500">Dec 25 - Jan 5</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Science Exhibition</span>
            <span className="text-sm text-gray-500">Jan 20, 2025</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Art Competition</span>
            <span className="text-sm text-gray-500">Feb 10, 2025</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MainContent;
