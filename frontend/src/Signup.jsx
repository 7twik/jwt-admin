import React from 'react'
import axios from 'axios'
const Signup = () => {
    const user = React.useRef()
    const pass = React.useRef()
    const submit = async() => {
        console.log(user.current.value, pass.current.value);
        
        await axios.post('http://localhost:8080/user/register', {
            user: user.current.value,
            pass: pass.current.value
        }).then((response) => {
            console.log(response);
        })
    }
  return (
    <div>
        <h1>Signup</h1>
        <input type="text" ref={user} />
        <input type="text" ref={pass} />
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Signup