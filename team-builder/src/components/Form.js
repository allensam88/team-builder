import React, { useState, useEffect } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({ name: "", job: "", email: "" });

  const handleChanges = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", job: "", email: "" });
  };

//   useEffect(() => {
      
// }, [props.memberToEdit]);

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="job">Job Role:</label>
      <input
        id="job"
        name="job"
        onChange={handleChanges}
        value={member.job}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
       />
      <button type="submit">Add</button>
    </form>
  );
};

export default MemberForm;
