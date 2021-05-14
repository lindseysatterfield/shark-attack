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
    <div className="App">
      <div className="welcome">
        <h1>NSS E14 Shark Tank</h1>
        <h2>Please click button to start an attack!</h2>
      </div>
      <div className="header">
          <Button
            color='danger'
            onClick={killEmDead}
            disabled={aliveStudents.length <= 0}
            size="lg"
          >
            SHARK ATTACK
          </Button>
      </div>
      <div className='tank'>
        <div className="living">
          <h2>Living Students</h2>
          <div className="container">
            <StudentList studentArray={aliveStudents} />
          </div>
        </div>
        <div className="dead">
          <h2>Dead Students</h2>
          <div className="container">
            <StudentList studentArray={deadStudents}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
