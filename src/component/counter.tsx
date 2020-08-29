import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../stores/counter';
import { Store } from '../interface';

// テスト用のコンポーネント 実際には使わない
export const Counter: React.FC = () => {
  const count = useSelector((store: Store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <Header>Counter</Header>
      <Header data-testid="count">{count}</Header>
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
