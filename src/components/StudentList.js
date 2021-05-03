import React from 'react';
import PropTypes from 'prop-types';
import SingleStudent from './SingleStudentCard';

const StudentList = ({ studentArray, color }) => (
<ul>
  {studentArray.map((student) => (
    <SingleStudent color = {color} key={student.id} student={student} />
  ))}
</ul>
);

StudentList.propTypes = {
  studentArray: PropTypes.array.isRequired,
  color: PropTypes.string,
};

export default StudentList;
