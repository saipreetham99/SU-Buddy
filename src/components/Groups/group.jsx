import React from 'react';
import StudentProfile from './StudentProfile';  // Ensure correct import paths
import AlumniProfile from './AlumniProfile';   // Ensure correct import paths

const Group = ({ userType }) => {
  // Determine which profile to render based on the userType prop
  switch (userType) {
    case 'student':
      return <StudentProfile />;
    case 'alumni':
      return <AlumniProfile />;
    default:
      return <div>Please select a valid user type.</div>;
  }
};

export default Group;
