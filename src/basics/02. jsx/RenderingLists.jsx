import { Fragment } from 'react';

function RenderingLists() {
  const numbers = [1, 1, 3, 4, 5];

  return (
    <ul>
      {numbers.map((number, idx) => (
        <Fragment key={idx}>
          <li>{number}</li>
          <li>{number}</li>
        </Fragment>
      ))}
    </ul>
  );
}

export default RenderingLists;
