import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/tailwind.css";
import "../styles/students.css";

const Dashboard = () => {
  return (
    <div className="flex h-screen">

      <aside className="w-64 bg-black" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-black rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-800">
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/book-inventory" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-800">
                <span className="ml-3">Books</span>
              </a>
            </li>
            <li>
              <a href="/students" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-800">
                <span className="ml-3">Students</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-800">
                <span className="ml-3">Issued Books</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-800">
                <span className="ml-3">Reports</span>
              </a>
            </li>
            <li>
              <Link to={'/checkin'} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-800">
                <span className="ml-3">Check in</span>
              </Link>
            </li>
            <li>
              <Link to={'/checkout'} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-800">
                <span className="ml-3">Check out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg bg-white dark:bg-gray-800">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">Total Books</h2>
              <p className="text-2xl">1200</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">Students</h2>
              <p className="text-2xl">300</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">Books Issued</h2>
              <p className="text-2xl">150</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold">Overdue Books</h2>
              <p className="text-2xl">20</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;