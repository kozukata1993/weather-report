import React from 'react';
import firebase from 'firebase/app';
import {
  Container,
  Segment,
  Dropdown,
  Menu,
  Button,
  Transition,
  Label,
  Confirm,
} from 'semantic-ui-react';
import { StoreMessage } from '../interface';

interface LayoutProps {
  currentUser: firebase.User | null;
  message: StoreMessage;
  handleGoogleClick: () => void;
  handleGuestClick: () => void;
  handleLogoutClick: () => void;
  isOpen: boolean;
  openConfirm: () => void;
  closeConfirm: () => void;
  handleConfirmClick: () => void;
  isLoading: boolean;
}

export const LayoutComponent: React.FC<LayoutProps> = ({
  children,
  currentUser,
  message,
  handleGoogleClick,
  handleGuestClick,
  handleLogoutClick,
  isOpen,
  openConfirm,
  closeConfirm,
  handleConfirmClick,
  isLoading,
}) => (
  <>
    <Menu fixed="top" pointing inverted borderless>
      <Container>
        <Menu.Item as="h3" header>
          Weather Report
        </Menu.Item>
        <Menu.Item>
          <Transition
            visible={message.visible}
            animation="scale"
            duration={500}
            className="message"
          >
            <Label size="large" color={message.color} pointing="left" content={message.text} />
          </Transition>
        </Menu.Item>

        <Menu.Item
          as={Dropdown}
          position="right"
          item
          simple
          text={currentUser ? 'Log out' : 'Log in'}
        >
          <Dropdown.Menu>
            <Dropdown.Header content={currentUser ? 'ログアウト' : 'ログイン'} />
            {currentUser ? (
              <Dropdown.Item
                content={<Button content="ログアウト" color="grey" onClick={handleLogoutClick} />}
              />
            ) : (
              <>
                <Dropdown.Item
                  content={
                    <Button
                      content="Googleアカウントでログイン"
                      color="blue"
                      onClick={handleGoogleClick}
                    />
                  }
                />
                <Dropdown.Item
                  content={
                    <Button
                      content="ゲストアカウントでログイン"
                      color="grey"
                      onClick={handleGuestClick}
                    />
                  }
                />
              </>
            )}
            {currentUser ? (
              <>
                <Dropdown.Divider />
                <Dropdown.Header content="アカウント削除" />
                <Dropdown.Item
                  content={
                    <Button content="このアカウントを削除" color="red" onClick={openConfirm} />
                  }
                />
                <Confirm
                  open={isOpen}
                  onCancel={closeConfirm}
                  onConfirm={handleConfirmClick}
                  content="アカウントを削除してよろしいですか？"
                  cancelButton="Cancel"
                  confirmButton="Delete"
                  size="mini"
                />
              </>
            ) : (
              <></>
            )}
          </Dropdown.Menu>
        </Menu.Item>
      </Container>
    </Menu>
    <Container>
      <Segment basic style={{ paddingTop: '7em' }} loading={isLoading}>
        {children}
      </Segment>
    </Container>
  </>
);
