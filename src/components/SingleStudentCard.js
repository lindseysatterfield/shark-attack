import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody,
  CardTitle
} from 'reactstrap';

const SingleStudent = ({ student }) => (
  <div>
    <Card id="card">
      <CardImg top width="100%" src={student.image} className="student-image" alt="Image of student" />
      <CardBody>
        <CardTitle tag="h5">{student.firstName} {student.lastName}</CardTitle>
      </CardBody>
    </Card>
  </div>

);

SingleStudent.propTypes = {
  student: PropTypes.object.isRequired
};

export default SingleStudent;
