import React from 'react';
import Alert from '../index';
import '../style';

export default function () {
  return (
    <>
      <Alert iconColor="#ccc" type="info" closable={false}>
        这是一条info提示
      </Alert>
      <Alert type="error" iconColor="#ccc">
        这是一条error提示
      </Alert>
      <Alert type="success" iconColor="#ccc">
        这是一条success提示
      </Alert>
      <Alert type="warning" iconColor="#ccc">
        这是一条warning提示
      </Alert>
    </>
  );
}
