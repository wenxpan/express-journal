import React, { useState } from "react"

const Student = () => {
  const [content, setContent] = useState({
    fName: "",
    lName: "",
    contactEmail: ""
  })
  const [studentId, setStudentId] = useState("")
  const [user, setUser] = useState({ email: "", student: "", password: "" })
  const [profile, setProfile] = useState({})
  function handleInput(changed) {
    setContent((prev) => ({ ...prev, ...changed }))
  }
  function handleUserInput(changed) {
    setUser((prev) => ({ ...prev, ...changed }))
  }
  async function handleCreate() {
    const res = await fetch(`http://127.0.0.1:4001/students`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content)
    })
    const data = await res.json()
    setStudentId(data._id)
    setContent({
      fName: "",
      lName: "",
      contactEmail: ""
    })
  }

  async function handleRegister() {
    const res = await fetch(`http://127.0.0.1:4001/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
    const data = await res.json()
    console.log(data)
    setUser({ email: "", student: "", password: "" })
    setProfile(data)
  }
  return (
    <div>
      <h4>Admin creates student:</h4>
      <p>first name:</p>
      <input
        value={content.fName}
        onChange={(e) => handleInput({ fName: e.target.value })}
      />
      <p>last name:</p>
      <input
        value={content.lName}
        onChange={(e) => handleInput({ lName: e.target.value })}
      />
      <p>email:</p>
      <input
        value={content.contactEmail}
        onChange={(e) => handleInput({ contactEmail: e.target.value })}
      />
      <button onClick={handleCreate}>Create</button>
      <br />
      <br />
      <p>Student Id: {studentId}</p>
      <h4>Student signup:</h4>
      <p>Email:</p>
      <input
        value={user.email}
        onChange={(e) => handleUserInput({ email: e.target.value })}
      />
      <p>Password:</p>
      <input
        value={user.password}
        onChange={(e) => handleUserInput({ password: e.target.value })}
      />
      <p>StudentId:</p>
      <input
        value={user.student}
        onChange={(e) => handleUserInput({ student: e.target.value })}
      />
      <button onClick={handleRegister}>Sign up</button>
      <h4>Student Profile: </h4>
      {profile && profile.student && (
        <>
          <p>User email: {profile.email}</p>
          <p>User password: {profile.password}</p>
          <p>User id: {profile._id}</p>
          <h5>Related student:</h5>
          <p>First name: {profile.student.fName}</p>
          <p>Last name: {profile.student.lName}</p>
          <p>id: {profile.student._id}</p>
        </>
      )}
    </div>
  )
}

export default Student
