import React from 'react';
import Button from '../';
import '../style';

export default function () {
  return (
    <>
      <p>按钮类型</p>
      <Button type="danger">danger按钮</Button>
      <Button type="default">default按钮</Button>
      <Button type="link">link按钮</Button>
      <Button type="primary">primary按钮</Button>
      <p>按钮大小</p>
      <Button type="primary" size="large">
        大按钮
      </Button>
      <br />
      <Button type="primary">中按钮</Button>
      <br />
      <Button type="primary" size="small">
        小按钮
      </Button>
    </>
  );
}
