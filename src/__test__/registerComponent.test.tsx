import React from 'react';
import { render, cleanup, screen } from './test-utils';
import { RegisterComponent } from '../components/register/register';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Register', () => {
  const mockHandleChangeCity = jest.fn();
  const mockHandleChangeTime = jest.fn();
  const mockHandleChangeWebhookUrl = jest.fn();
  const mockHandleClick = jest.fn();
  const mockOpenModal = jest.fn();
  const mockCloseModal = jest.fn();

  const notices = [
    {
      id: '000',
      city: 'tokyo',
      time: 7,
      webhookUrl: 'https://hooks.slack.com/services/FOOBAR',
      createdAt: new Date(2020, 1, 1),
    },
  ];

  it('NoticeCardが表示されている', () => {
    render(
      <RegisterComponent
        notices={notices}
        handleChangeCity={mockHandleChangeCity}
        handleChangeTime={mockHandleChangeTime}
        handleChangeWebhookUrl={mockHandleChangeWebhookUrl}
        handleClick={mockHandleClick}
        webhookUrl=""
        isDisabled={false}
        openModal={mockOpenModal}
        closeModal={mockCloseModal}
        isOpen
      />,
    );

    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('7:00');
    expect(screen.getAllByRole('listitem')[1]).toHaveTextContent('東京都');
    expect(screen.getAllByRole('listitem')[2]).toHaveTextContent(
      'https://hooks.slack.com/services/FOOBAR',
    );
  });
});
