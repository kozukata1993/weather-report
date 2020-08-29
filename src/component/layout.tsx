import React from 'react';
import firebase from 'firebase/app';
import {
  Container,
  Segment,
  Dropdown,
  Menu,
  Button,
  Icon,
  Transition,
  Header,
} from 'semantic-ui-react';
import { StoreMessage } from '../interface';

interface LayoutProps {
  currentUser: firebase.User | null;
  message: StoreMessage;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children, currentUser, message }) => (
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
            <Header content={message.text} inverted />
          </Transition>
        </Menu.Item>

        <Menu.Item as={Dropdown} position="right" item simple text={<Icon name="sidebar" />}>
          <Dropdown.Menu>
            <Dropdown.Header content={currentUser ? 'ログアウト' : 'ログイン'} />
            {currentUser ? (
              <Dropdown.Item content={<Button content="ログアウト" color="grey" />} />
            ) : (
              <>
                <Dropdown.Item
                  content={<Button content="Googleアカウントでログイン" color="blue" />}
                />
                <Dropdown.Item
                  content={<Button content="ゲストアカウントでログイン" color="grey" />}
                />
              </>
            )}
            {currentUser ? (
              <>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </>
            ) : (
              <></>
            )}
          </Dropdown.Menu>
        </Menu.Item>
      </Container>
    </Menu>
    <Container>
      <Segment basic style={{ paddingTop: '7em' }}>
        {children}
      </Segment>
    </Container>
  </>
);
