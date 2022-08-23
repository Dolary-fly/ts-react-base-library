import React from 'react';
import Modal from '../';
import Panel from '../panel';
import Button from '../../button';
import '../style';

export default function () {
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          Modal.success({
            title: 'success',
            content: 'modalSuccess',
            showCancel: false,
            showOK: false,
          });
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
