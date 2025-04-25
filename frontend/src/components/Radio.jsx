import React, { useState } from 'react';

const Radio = () => {
  const [selected, setSelected] = useState('Yes');

  return (
    <div className="flex gap-6 p-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="Yes"
          checked={selected === 'Yes'}
          onChange={() => setSelected('Yes')}
          className="hidden"
        />
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected === 'Yes' ? 'border-violet-600' : 'border-gray-400'
        }`}>
          {selected === 'Yes' && <div className="w-2.5 h-2.5 bg-violet-600 rounded-full" />}
        </div>
        <span className={selected === 'Yes' ? 'text-violet-600' : 'text-gray-700'}>Yes</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="No"
          checked={selected === 'No'}
          onChange={() => setSelected('No')}
          className="hidden"
        />
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected === 'No' ? 'border-violet-600' : 'border-gray-400'
        }`}>
          {selected === 'No' && <div className="w-2.5 h-2.5 bg-violet-600 rounded-full" />}
        </div>
        <span className={selected === 'No' ? 'text-violet-600' : 'text-gray-700'}>No</span>
      </label>
    </div>
  );
};

export default Radio;
