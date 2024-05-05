import React, { useState } from "react";
import backgroundImage from "../images/su.jpg";
import GroupCardAdd from "../components/Groups/GroupCardAdd";
import Selector from "../components/Groups/Selector";
import { useChat } from '../components/Groups/ChatContext';
import imgBadminton from '../images/badminton.jpg';
import imgComputerEngineering from '../images/CE.jpg';
import CIS from '../images/CIS.jpg';
import imgeSports from '../images/eSports.jpg';
import imgDefault from '../images/goal.jpg';

const Groups = () => {
  const { addChat, isChatAdded } = useChat();
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [selectedClubs, setSelectedClubs] = useState([]);
  const [tempBranches, setTempBranches] = useState([]);
  const [tempClub, setTempClub] = useState("");
  const [showCards, setShowCards] = useState(false);

  const departments = [
    "College of Arts and Sciences",
    "College of Engineering and Computer Science",
    "College of Visual and Performing Arts",
    "David B. Falk College of Sport and Human Dynamics",
    "Martin J. Whitman School of Management",
    "Maxwell School of Citizenship and Public Affairs",
    "S.I. Newhouse School of Public Communications",
    "School of Education",
    "School of Information Studies",
  ];

  const branches = {
    "College of Arts and Sciences": ["Biology", "Chemistry", "Physics"],
    "College of Engineering and Computer Science": ["Computer and Information Science", "Computer Engineering", "Electrical Engineering", "Mechanical Engineering"],
    "College of Visual and Performing Arts": ["Art", "Music", "Theater"],
    "David B. Falk College of Sport and Human Dynamics": ["Sports Management", "Nutrition Science", "Social Work"],
    "Martin J. Whitman School of Management": ["Finance", "Marketing", "Entrepreneurship"],
    "Maxwell School of Citizenship and Public Affairs": ["Political Science", "Public Administration", "International Relations"],
    "S.I. Newhouse School of Public Communications": ["Journalism", "Television", "Public Relations"],
    "School of Education": ["Curriculum and Teaching", "Educational Leadership", "Instructional Design"],
    "School of Information Studies": ["Information Technology", "Data Science", "Cybersecurity"],
  };

  const clubs = [
    "Badminton Club",
    "Boxing",
    "Cricket",
    "Swimming",
    "eSports at Syracuse University",
    "Hacking",
    "Men's Basketball",
    "Women's Basketball",
    "Volleyball",
  ];

  const SelectedImages = {
    "Computer Engineering": imgComputerEngineering,
    "Computer and Information Science": CIS,
    "Badminton Club": imgBadminton,
    "eSports at Syracuse University": imgeSports,
    // More mappings...
  };
 
  const handleView = () => {
    setShowCards(true);
    // Add new branches that haven't been displayed yet
    const newBranches = tempBranches.filter(branch => !selectedBranches.includes(branch));
    setSelectedBranches([...selectedBranches, ...newBranches]);

    if (tempClub && !selectedClubs.includes(tempClub)) {
      setSelectedClubs([...selectedClubs, tempClub]);
    }
  };

  const handleAddToChatWithAlert = (card) => {
    if (!isChatAdded(card.name)) {
      addChat(card);
      alert(`${card.name} has been added to Chat!`);
    } else {
      alert(`${card.name} is already in the Chat!`);
    }
  };

  const handleClear = () => {
    setSelectedDepartment("");
    setTempBranches([]);
    setSelectedBranches([]);
    setTempClub("");
    setSelectedClubs([]);
    setShowCards(false);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})`, filter: "brightness(80%)" }}
    >
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <Selector
            title="Department"
            options={departments}
            selectedValues={selectedDepartment}
            onChange={(e) => {
              setSelectedDepartment(e.target.value);
              setTempBranches(branches[e.target.value] || []);
            }}
          />
          <Selector
            title="Branch"
            options={branches[selectedDepartment] || []}
            selectedValues={tempBranches}
            onChange={(e) => setTempBranches([...e.target.selectedOptions].map(o => o.value))}
            isMultiSelect={true}
            isHidden={!selectedDepartment}
          />
          <Selector
            title="Club"
            options={clubs}
            selectedValues={tempClub}
            onChange={(e) => setTempClub(e.target.value)}
          />
          <button onClick={handleView} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button>
          <button onClick={handleClear} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Clear</button>
        </div>
        {showCards ? (
          <div className="grid grid-cols-3 gap-4">
            {selectedBranches.map((branch, index) => (
              <GroupCardAdd
                key={index}
                name={branch}
                imageUrl={SelectedImages[branch] || imgDefault}
                link="/path/to/group/chat"
                onAddToChat={handleAddToChatWithAlert}
              />
            ))}
            {selectedClubs.map((club, index) => (
              <GroupCardAdd
                key={index}
                name={club}
                imageUrl={SelectedImages[club] || imgDefault}
                link="/path/to/club/chat"
                onAddToChat={handleAddToChatWithAlert}
              />
            ))}
          </div>
        ) : (
          <div className="container mx-auto px-4 pt-12 flex justify-center items-center h-full">
            <div className="inline-block bg-white text-gray-800 text-center py-2 px-4 rounded-lg shadow">
              Select a club or both a department and branch, then press "View" to see the group info.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Groups;
