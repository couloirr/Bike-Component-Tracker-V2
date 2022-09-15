import React from 'react';

function Login() {
  function handleSubmit() {
    // e.preventDefault();
    console.log('in handle submit');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username"></input>
        <input type="text" placeholder="Password" name="password"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default Login;
