import React from 'react'

const Home = () => {
    function logout(){
        localStorage.removeItem('token');
        window.location.href="/";
    }
  return (
    <div>Home
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home