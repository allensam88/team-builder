import React from 'react';

const Members = props => {
    return (
      <div>
        {props.members.map(member => (
          <div className="member" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.job}</p>
            <p>{member.email}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Members;