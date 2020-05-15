import React, { useState, useEffect } from 'react';

import './App.css';

import Member from './components/Member';
import MemberForm from './components/Form';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Steve Perry',
      job: 'Vocalist',
      email: 'dontstopbelievin@hotmail.com'
    }
  ]);

  const editMember = () => {
    console.log('editing');
    // const [memberToEdit, setMemberToEdit] = useState(false);
  }

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
      <h1 style={{ textDecoration:'underline' }}>Team Roster</h1>
      <div className='container'>
        <MemberForm addNewMember={addNewMember} />
        <h2 style={{ margin: '0 20px', textAlign: 'left' }}>Line-Up</h2>
        {members.map(member => (<Member key={member.id} name={member.name} job={member.job} email={member.email} editMember={editMember}/>))}
      </div>
    </div>
  );
}

export default App;
