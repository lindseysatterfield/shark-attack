import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import {
  livingStudents,
  dearlyBeloved,
  killStudent
} from '../helpers/data/studentData';
import StudentList from '../components/StudentList';

function App() {
  const [aliveStudents, setAliveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setAliveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);

  const killEmDead = () => {
    const [living, dead] = killStudent();
    setAliveStudents(living);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <Button
        color='danger'
        onClick={killEmDead}
        disabled={aliveStudents.length <= 0}
      >
        SHARK ATTACK
      </Button>
      <h2>Living Students</h2>
      <StudentList color='info' studentArray={aliveStudents} />
      <h2>Dead Students</h2>
      <StudentList color='secondary' studentArray={deadStudents}/>
    </div>
  );
}

export default App;
