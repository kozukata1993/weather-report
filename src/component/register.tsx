import React from 'react';
import { Header, Form, Segment, DropdownProps, InputOnChangeData } from 'semantic-ui-react';

interface RegisterProps {
  handleChangeCity: (e: React.FormEvent, { value }: DropdownProps) => void;
  handleChangeTime: (e: React.FormEvent, { value }: DropdownProps) => void;
  handleChangeWebhookUrl: (e: React.FormEvent, { value }: InputOnChangeData) => void;
  handleClick: () => Promise<void>;
  webhookUrl: string;
}

export const RegisterComponent: React.FC<RegisterProps> = ({
  handleChangeCity,
  handleChangeTime,
  handleChangeWebhookUrl,
  handleClick,
  webhookUrl,
}) => {
  const cityOptions = [
    { key: 'tokyo', text: '東京', value: 'tokyo' },
    { key: 'osaka', text: '大阪', value: 'osaka' },
    { key: 'nagoya', text: '名古屋', value: 'nagoya' },
    { key: 'morioka', text: '盛岡', value: 'morioka' },
  ];

  const noticeOptions = [
    { key: 6, text: 'AM 6:00', value: 6 },
    { key: 7, text: 'AM 7:00', value: 7 },
    { key: 8, text: 'AM 8:00', value: 8 },
  ];

  return (
    <>
      <Header>Register</Header>
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="都市"
              placeholder="City name"
              options={cityOptions}
              onChange={handleChangeCity}
            />
            <Form.Select
              fluid
              label="通知する時刻"
              placeholder="When to notify"
              options={noticeOptions}
              onChange={handleChangeTime}
            />
          </Form.Group>
          <Form.Input
            fluid
            label="Webhook URL"
            placeholder="Webhook URL"
            onChange={handleChangeWebhookUrl}
            value={webhookUrl}
          />
          <Form.Button color="instagram" onClick={handleClick}>
            登録
          </Form.Button>
        </Form>
      </Segment>
    </>
  );
};
