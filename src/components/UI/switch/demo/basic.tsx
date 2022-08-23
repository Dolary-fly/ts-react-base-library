import React from 'react';
import Switch from '..';

export default function () {
  return (
    <>
      <Switch size="small" checked={true}></Switch>
      <Switch
        checked={true}
        onChange={(state, event) => {
          console.log(state);
        }}
      ></Switch>
    </>
  );
}
