import React from 'react';
import BaseProfile from './BaseProfile';
import Selector from './components/Groups/Selector';
import GroupCardAdd from './components/Groups/GroupCardAdd';

class StudentProfile extends BaseProfile {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      selectedBranches: [],
      selectedClubs: [],
    };
  }

  clubs = [
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

  handleClubChange = (e) => {
    this.setState({ selectedClubs: [...e.target.selectedOptions].map(o => o.value) });
  }

  render() {
    const { tempBranches, selectedDepartment, selectedBranches, selectedClubs } = this.state;
    return (
      <div>
        {super.render()}
        <Selector
          title="Branch"
          options={tempBranches}
          onChange={(e) => this.setState({ selectedBranches: [...e.target.selectedOptions].map(o => o.value) })}
          isMultiSelect={true}
          isHidden={!selectedDepartment}
        />
        <Selector
          title="Club"
          options={this.clubs}
          onChange={this.handleClubChange}
          isMultiSelect={true}
        />
        <div className="grid grid-cols-3 gap-4">
          {selectedBranches.map((branch, index) => (
            <GroupCardAdd
              key={index}
              name={branch}
              imageUrl={`/path/to/images/${branch}.jpg`}  // Assuming corresponding images named after branches
              link="/path/to/group/chat"
              onAddToChat={() => alert(`${branch} has been added to Chat!`)}
            />
          ))}
          {selectedClubs.map((club, index) => (
            <GroupCardAdd
              key={index}
              name={club}
              imageUrl={`/path/to/images/${club}.jpg`}  // Assuming corresponding images named after clubs
              link="/path/to/club/chat"
              onAddToChat={() => alert(`${club} has been added to Chat!`)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StudentProfile;
