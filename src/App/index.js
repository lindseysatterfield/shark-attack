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
    <>
      <div className="welcome">
        <h1>NSS E14 Shark Tank</h1>
        <h2>Please click to button to start an attack!</h2>
      </div>
      <div className="header">
        {/* <h1>Living Students</h1> */}
          <Button
            color='danger'
            onClick={killEmDead}
            disabled={aliveStudents.length <= 0}
          >
            SHARK ATTACK
          </Button>
      </div>
      <div className='tank'>
        <div className="living">
          <h1>Living Students</h1>
          <div className="container">
            <StudentList color='info' studentArray={aliveStudents} />
          </div>
        </div>
        <div className="dead">
          <h1>Dead Students</h1>
          <div className="container">
            <StudentList color='secondary' studentArray={deadStudents}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
