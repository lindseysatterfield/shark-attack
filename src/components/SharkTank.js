import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

const SharkTank = ({ livingStudents }) => (
<ul>
  {livingStudents.map((student) => (
    <LiveStudent key={student.id} student={student} />
  ))}
</ul>);

SharkTank.propTypes = {
  livingStudents: PropTypes.array.isRequired
};

export default SharkTank;
