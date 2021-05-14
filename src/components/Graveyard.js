import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

const GraveYard = ({ deadStudents }) => (
  <div className="graveyard">
    {deadStudents.map((student) => (
      <GraveStone key={student.id} student={student}/>
    ))}
  </div>
);

GraveYard.propTypes = {
  deadStudents: PropTypes.array.isRequired
};

export default GraveYard;
