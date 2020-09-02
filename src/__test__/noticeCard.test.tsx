import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from './test-utils';
import { NoticeCard } from '../container/noticeCard';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('first test', () => {
  it('render', () => {
    const notice = {
      id: '000',
      city: 'morioka',
      time: 7,
      webhookUrl: 'https://hooks.slack.com/services/FOOBAR',
      createdAt: new Date(2020, 11, 26),
    };
    render(<NoticeCard notice={notice} />);
    expect(screen.getByTestId('city')).toHaveTextContent('morioka');
    expect(screen.getByTestId('createdAt')).toHaveTextContent('2020/12/26');
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent('通知する時刻7:00');
    expect(screen.getAllByRole('listitem')[1]).toHaveTextContent('盛岡市');
    expect(screen.getAllByRole('listitem')[2]).toHaveTextContent(
      'https://hooks.slack.com/services/FOOBAR',
    );

    userEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('confirm')).toHaveTextContent('この通知を削除してよろしいですか？');
    userEvent.click(screen.getAllByRole('button')[1]);
    expect(screen.queryByTestId('confirm')).toBeNull();
    screen.debug();
  });
});
