function RedButton(props) {
  const { children } = props;

  return <button style={{ background: 'red' }}>{children}</button>;
}

function ChildrenProp() {
  return (
    <RedButton>
      <h1>submit</h1>
      <h2>submit</h2>
    </RedButton>
  );
}

export default ChildrenProp;
