import React from 'react';
import reactDom from 'react-dom';

export const Portal = () => {
  return reactDom.createPortal(
    <span>Outside root</span>,
    document.getElementById('another-root')
  );
};
