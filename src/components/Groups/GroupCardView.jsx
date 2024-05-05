// GroupCardView.jsx
import React from 'react';

const GroupCardView = ({ name, imageUrl, link }) => {
  return (
    <div className="max-w-xs mx-auto bg-blue-900 bg-opacity-90 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl flex flex-col">
      <div className="flex justify-center pt-6">
        <img src={imageUrl} alt={`Logo of ${name}`} className="rounded h-32 w-32 object-cover" />
      </div>
      <div className="flex-grow p-6 text-center text-white">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
      </div>
      <div className="pb-6 px-6 text-center">
        <a href="https://teams.microsoft.com/l/team/19%3Az3dQFDxRO4yD0Y-uLIXa_TuUswaUelyJeAvgO0wSNGA1%40thread.tacv2/conversations?groupId=a553bccc-8654-4439-afba-6b44a032d798&tenantId=4278a402-1a9e-4eb9-8414-ffb55a5fcf1e" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
          Go to Chat
        </a>
      </div>
    </div>
  );
};

export default GroupCardView;
