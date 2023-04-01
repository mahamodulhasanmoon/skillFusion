import React, { useState } from 'react';

const CategoriesFilter = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event:any) => {
      setChecked(event.target.checked);
    };
    return (
        <div className="flex flex-col bg-white p-4 mr-6 rounded-lg shadow-md my-6">
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-medium">Filtered By</h2>
          <div className="flex flex-col mt-2 space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <span className="text-gray-900 font-medium">All</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <span className="text-gray-900 font-medium">Career Track</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <span className="text-gray-900 font-medium">Programming</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <span className="text-gray-900 font-medium">Graphics Design</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <span className="text-gray-900 font-medium">Digital Marketing</span>
            </label>
          </div>
        </div>
  
      </div>
    );
};

export default CategoriesFilter;