import React from 'react';
import BaseProfile from './BaseProfile';  // Make sure the import path is correct based on your project structure

class AlumniProfile extends BaseProfile {
  render() {
    return (
      <div className="alumni-profile">
        <h2>Alumni Profile</h2>
        {super.render()}
      </div>
    );
  }
}

export default AlumniProfile;
