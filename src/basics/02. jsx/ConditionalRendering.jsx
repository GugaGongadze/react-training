function LoginButton() {
  return <button>Login</button>;
}

function LogoutButton() {
  return <button>Logout</button>;
}

function ConditionalRendering() {
  const isLoggedIn = true;

  return <div>{isLoggedIn ? <LogoutButton /> : <LoginButton />}</div>;
}

export default ConditionalRendering;
