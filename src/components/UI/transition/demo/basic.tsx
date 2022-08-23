import React, { useState } from 'react';
import Transition from '../';
import Button from '../../button';
import '../style';

export default () => {
  const [showTransition, setShowTransition] = useState<boolean>(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setShowTransition(true);
        }}
      >
        展示
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setShowTransition(false);
        }}
      >
        隐藏
      </Button>
      <Transition in={showTransition} timeout={400} animation="zoom-in-left">
        <div style={{ width: '400px', height: '400px', border: '2px solid #ccc' }}>transition</div>
      </Transition>
    </>
  );
};
