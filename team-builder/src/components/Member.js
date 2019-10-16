import React from 'react';

const Member = props => {
    
  //if edit button is true (on), then show me the second update form
if (props.memberToEdit === true) {
  return (
    <div>Hello World</div>
  )
}
  
  
  
  else {
    return (
      <div className='member-list'>
          <div className='member' key={props.id}>
            <h2>{props.name}</h2>
            <p>{props.job}</p>
            <p>{props.email}</p>
            <button onClick={props.editMember()}>EDIT</button>
          </div>
    
      </div>
    )
  };
} 
  export default Member;