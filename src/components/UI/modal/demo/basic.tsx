import React from 'react';
import Modal from '../';
import Button from '../../button';
import '../style';

export default function () {
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          Modal.success({});
        }}
      >
        success Modal
      </Button>
      <br />
      <Button
        type="warning"
        onClick={() => {
          Modal.warning({});
        }}
      >
        warning Modal
      </Button>
      <br />
      <Button
        type="info"
        onClick={() => {
          Modal.info({});
        }}
      >
        info Modal
      </Button>
    </>
  );
}
