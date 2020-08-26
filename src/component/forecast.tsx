import React, { FC } from 'react';
import { Header, Button } from 'semantic-ui-react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../stores/counter';
// import { Store } from '../interface';
import { getForecasts } from '../firebase/firestore';

export const Forecast: FC = () => {
  // const count = useSelector((store: Store) => store.counter.count);
  // const dispatch = useDispatch();

  const handleClick = async () => {
    console.log('start');
    const res = await getForecasts('tokyo');
    console.log(res);
  };

  return (
    <>
      <Header>Forecast</Header>
      <Button color="instagram" content="Get Forecast" onClick={handleClick} />
    </>
  );
};
