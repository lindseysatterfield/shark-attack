import React from 'react';
import PropTypes from 'prop-types';
import SingleStudent from './SingleStudentCard';

const StudentList = ({ studentArray }) => (
  <>
    {studentArray.map((student) => (
      <SingleStudent key={student.id} student={student} />
    ))}
  </>
);

StudentList.propTypes = {
  studentArray: PropTypes.array.isRequired
};

export default StudentList;
