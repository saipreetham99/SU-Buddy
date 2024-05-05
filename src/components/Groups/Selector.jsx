// Selector.jsx
import React from 'react';

const Selector = ({ title, options, selectedValues, onChange, isMultiSelect = false, isHidden = false }) => {
  if (isHidden) return null;

  return (
    <div className="w-full md:w-1/4">
      <select
        value={selectedValues}
        onChange={onChange}
        multiple={isMultiSelect}
        className="p-2 border border-gray-300 rounded w-full"
      >
        <option value="">{`Select ${title}`}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
