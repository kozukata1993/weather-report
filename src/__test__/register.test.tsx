import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from './test-utils';
import { Register } from '../container/register';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Register', () => {
  it('first test', () => {
    render(<Register />);

    expect(screen.getByRole('link')).toHaveTextContent('SlackのIncoming Webhook');
  });

  it('click', async () => {
    render(<Register />);

    const options = [
      '東京',
      '大阪',
      '名古屋',
      '盛岡',
      ...[...Array(24).keys()].map((n) => `${n}:00`),
    ];

    userEvent.click(screen.getByRole('button'));
    screen.getAllByRole('option').forEach((element, i) => {
      expect(element).toHaveTextContent(options[i]);
    });

    expect(screen.getAllByRole('button')[1]).toHaveTextContent('登録');
    // userEvent.selectOptions(screen.getAllByRole('option')[0], '東京');
    // expect(screen.getAllByRole('button')[1]).toBeDisabled();
    // userEvent.selectOptions(screen.getAllByRole('option')[11], '7:00');
    // expect(screen.getAllByRole('button')[1]).toBeDisabled();
    // await userEvent.type(
    //   screen.getByPlaceholderText('Webhook URL'),
    //   'https://hooks.slack.com/services/FOOBAR',
    // );
    // expect(screen.findAllByRole('button')[1]).toBeEnabled();
    // screen.debug();
  });
});
