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
      <Transition in={showTransition} timeout={150} animation="zoom-in-top">
        <div>transition</div>
      </Transition>
    </>
  );
};
