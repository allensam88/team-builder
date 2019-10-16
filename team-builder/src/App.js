import React, { useState } from 'react';

import './App.css';

import Members from './components/Members';
import MemberForm from './components/MemberForm';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Sam Allen',
      job: 'intern',
      email: 'allensam88@gmail.com'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      job: member.job,
      email: member.email
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Roster</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
