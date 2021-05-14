import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

const SharkTank = ({ livingStudents }) => (
  <div className="container">
    {livingStudents.map((student) => (
      <LiveStudent key={student.id} student={student} />
    ))}
  </div>
);

SharkTank.propTypes = {
  livingStudents: PropTypes.array.isRequired
};

export default SharkTank;
