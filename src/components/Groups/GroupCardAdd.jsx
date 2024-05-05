// GroupCardAdd.jsx
import React from 'react';


const GroupCardAdd = ({ name, imageUrl, link, onAddToChat }) => {
  const handleAddToChat = () => {
    onAddToChat({ name, imageUrl, link });
  };
  return (
    <div className="max-w-xs mx-auto bg-blue-900 bg-opacity-90 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl flex flex-col">
      <div className="flex justify-center pt-6">
        <img src={imageUrl} alt={`Logo of ${name}`} className="rounded h-32 w-32 object-cover" />
      </div>
      <div className="flex-grow p-6 text-center text-white">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
      </div>
      <div className="pb-6 px-6 text-center">
        <button onClick={handleAddToChat} className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Chat
        </button>
      </div>
    </div>
  );
};

export default GroupCardAdd;
