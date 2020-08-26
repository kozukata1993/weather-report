import React, { FC } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../stores/counter';
import { Store } from '../interface';

export const Register: FC = () => {
  const count = useSelector((store: Store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <Header>Hello</Header>
      <Header>GitHub Actions Success!</Header>
      <Header>Layout完成</Header>
      <Header>Cloud Functions for Firebase </Header>
      <Header>{count}</Header>
      <Button
        positive
        content="+"
        onClick={() => {
          dispatch(increment());
        }}
      />
      <Button
        negative
        content="-"
        onClick={() => {
          dispatch(decrement());
        }}
      />
    </>
  );
};
