import React from 'react';
import { useSelector } from 'react-redux';
import { LayoutComponent } from '../component/layout';
import { useAuth } from '../customHooks/useAuth';
import { Store } from '../interface';

export const Layout: React.FC = ({ children }) => {
  const currentUser = useAuth();
  const message = useSelector((store: Store) => store.message);

  return (
    <LayoutComponent currentUser={currentUser} message={message}>
      {children}
    </LayoutComponent>
  );
};
