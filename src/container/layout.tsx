import React from 'react';
import { useSelector } from 'react-redux';
import { LayoutComponent } from '../component/layout';
import { useAuth } from '../customHooks/useAuth';
import { useMessage } from '../customHooks/useMessage';
import { loginWithGoogleAccount, loginAnonymously, logout, deleteUser } from '../firebase/auth';
import { Store } from '../interface';

export const Layout: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const currentUser = useAuth();
  const displayMessage = useMessage();
  const message = useSelector((store: Store) => store.message);
  const isLoading = useSelector(({ loading }: Store) => loading.isLoading);

  const handleGoogleClick = async () => {
    await loginWithGoogleAccount();
    displayMessage('ログインに成功しました', 'blue');
  };
  const handleGuestClick = async () => {
    await loginAnonymously();
    displayMessage('ログインに成功しました', 'blue');
  };
  const handleLogoutClick = async () => {
    await logout();
    displayMessage('ログアウトしました', 'blue');
  };
  const openConfirm = () => {
    setIsOpen(true);
  };
  const closeConfirm = () => {
    setIsOpen(false);
  };
  const handleConfirmClick = async () => {
    await deleteUser();
    displayMessage('アカウントを削除しました', 'red');
  };

  return (
    <LayoutComponent
      currentUser={currentUser}
      message={message}
      handleGoogleClick={handleGoogleClick}
      handleGuestClick={handleGuestClick}
      handleLogoutClick={handleLogoutClick}
      isOpen={isOpen}
      openConfirm={openConfirm}
      closeConfirm={closeConfirm}
      handleConfirmClick={handleConfirmClick}
      isLoading={isLoading}
    >
      {children}
    </LayoutComponent>
  );
};
