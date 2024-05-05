// GroupCard.jsx
import React from 'react';

const GroupCard = ({ name, imageUrl, link, onJoinChat = () => {} }) => {  // Provide a default no-op function
  const handleJoinChat = () => {
    onJoinChat({ name, imageUrl, link });
  };

  return (
    <div className="max-w-xs mx-auto bg-blue-900 bg-opacity-90 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">
      <div className="flex justify-center pt-6">
        <img src={imageUrl} alt={`Logo of ${name}`} className="rounded h-32 w-32 object-cover" />
      </div>
      <div className="p-6 text-center text-white">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <button onClick={handleJoinChat} className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
          Join Group Chat
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
