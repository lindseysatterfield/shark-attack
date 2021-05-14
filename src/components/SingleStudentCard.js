import React from 'react';
import PropTypes from 'prop-types';
// import {
//   Card,
//   CardTitle
// } from 'reactstrap';
// import {
//   Card, CardImg, CardTitle,
// } from 'reactstrap';
import {
  Card, CardImg, CardBody,
  CardTitle
} from 'reactstrap';

const SingleStudent = ({ student, color }) => (
//  <Card body color={color}>
//   <CardTitle tag="h5">
//     {`${student.firstName} ${student.lastName}`}
//   <CardImg top width="100%" src={student.image} className="student-image"alt="Image of student" />
//   </CardTitle>
//   </Card>

  <div>
    <Card id="card">
      <CardImg top width="100%" src={student.image} className="student-image" alt="Image of student" />
      <CardBody>
        <CardTitle color={color} tag="h6">{student.firstName} {student.lastName}</CardTitle>
      </CardBody>
    </Card>
  </div>

);

SingleStudent.propTypes = {
  student: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default SingleStudent;
