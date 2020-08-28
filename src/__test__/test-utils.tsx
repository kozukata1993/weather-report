import React, { FC } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../stores/index';

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  const Wrappar: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrappar, ...options });
};

export { cleanup, screen } from '@testing-library/react';
export { customRender as render };
