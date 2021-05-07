import React, { useState } from 'react';

export const RenderProps = () => {
  return (
    <>
      <h1>Move the mouse around!</h1>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    </>
  );
};

const Mouse = (props) => {
  const { render } = props;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      onMouseMove={handleMouseMove}
    >
      {render(mousePosition)}
    </div>
  );
};

const Cat = (props) => {
  const { mouse } = props;

  return (
    <img
      src="https://aux.iconspalace.com/uploads/cat-clean-icon-256.png"
      style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
      alt="cat"
    />
  );
};
