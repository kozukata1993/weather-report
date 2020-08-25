import React, { FC } from 'react';
import { Container, Segment, Dropdown, Menu } from 'semantic-ui-react';

export const Layout: FC = ({ children }) => (
  <>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="h3" header>
          Weather Report
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Menu.Item as={Dropdown} position="right" item simple text="Dropdown">
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
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
