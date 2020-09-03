import React from 'react';
import userEvent from '@testing-library/user-event';
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

  it('click', () => {
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
        isOpen={false}
      />,
    );
    userEvent.click(screen.getAllByRole('button')[0]);
    expect(mockOpenModal).toHaveBeenCalledTimes(1);
  });

  it('select item', () => {
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

    userEvent.selectOptions(screen.getAllByRole('option')[0], '東京');
    expect(mockHandleChangeCity).toHaveBeenCalledTimes(1);
    userEvent.selectOptions(screen.getAllByRole('option')[11], '7:00');
    expect(mockHandleChangeTime).toHaveBeenCalledTimes(1);
  });
});
