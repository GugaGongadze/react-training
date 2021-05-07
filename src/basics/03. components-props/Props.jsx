function AuthButton(props) {
  const { loggedIn, value } = props;

  console.log(props);

  return <button>{value}</button>;
}

function Props() {
  const isLoggedIn = false;
  const value = 2;
  const arr = [];
  const obj = {};
  const fun = () => {};

  return (
    <AuthButton
      arr={arr}
      obj={obj}
      fun={fun}
      value={value}
      loggedIn={isLoggedIn}
    />
  );
}

export default Props;
