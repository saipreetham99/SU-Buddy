import React, { Component } from 'react';
import Selector from './components/Groups/Selector';  // Ensure correct import path based on your project structure

class BaseProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDepartment: "",
      tempBranches: [],
    };
  }

  departments = [
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

  branches = {
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

  handleDepartmentChange = (e) => {
    const branches = this.branches[e.target.value] || [];
    this.setState({
      selectedDepartment: e.target.value,
      tempBranches: branches,
    });
  }

  render() {
    return (
      <Selector
        title="Department"
        options={this.departments}
        selectedValues={this.state.selectedDepartment}
        onChange={this.handleDepartmentChange}
      />
    );
  }
}

export default BaseProfile;
