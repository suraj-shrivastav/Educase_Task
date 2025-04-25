import React from 'react';
import { Camera } from 'lucide-react';

function SettingPage() {
  return (
    <div className='md:w-1/3 lg:w-1/4 bg-gray-100 flex flex-col h-screen pb-10 border-2 border-gray-200'>
      <div className="bg-white p-4 text-xl font-semibold text-gray-600">
        <h1>Account Settings</h1>
      </div>

      <div className="border-b border-dashed border-gray-600 p-4">
        <div className="flex gap-4">

          <div className="relative h-20 w-20">
            <img
              className="h-20 w-20 rounded-full object-cover"
              src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?semt=ais_hybrid&w=740"
              alt="Profile"
            />
            <button className="absolute top-12 -right-1 rounded-full bg-violet-500 p-1 text-white shadow-md transition-colors hover:bg-violet-600">
              <Camera size={14} />
            </button>
          </div>

          <div className="mt-2">
            <p className="font-medium">Marry Doe</p>
            <p className="text-sm text-gray-500">Marry@Gmail.com</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-600 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis accusantium
            incidunt dolor, hic laboriosam eligendi dolorum vel repellendus a voluptatem
            atque maxime reiciendis soluta itaque, quisquam eos animi asperiores accusamus.
          </p>
        </div>
      </div>
      <div className="flex-grow" />
      <div className="w-full border-t border-dashed border-gray-600 text-center">
      </div>
    </div>
  );
}

export default SettingPage;
