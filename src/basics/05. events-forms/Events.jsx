function Events() {
  const handleClick = (event, second) => {
    console.log({ event, second });
  };

  return <button onClick={handleClick}>Click</button>;
}

export default Events;
