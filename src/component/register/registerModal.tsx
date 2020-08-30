import React from 'react';
import { Form, Button, Modal, DropdownProps, InputOnChangeData } from 'semantic-ui-react';

interface RegisterModalProps {
  handleChangeCity: (e: React.FormEvent, { value }: DropdownProps) => void;
  handleChangeTime: (e: React.FormEvent, { value }: DropdownProps) => void;
  handleChangeWebhookUrl: (e: React.FormEvent, { value }: InputOnChangeData) => void;
  handleClick: () => Promise<void>;
  webhookUrl: string;
  isDisabled: boolean;
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  handleChangeCity,
  handleChangeTime,
  handleChangeWebhookUrl,
  handleClick,
  webhookUrl,
  isDisabled,
  openModal,
  closeModal,
  isOpen,
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
    <Modal
      onClose={closeModal}
      onOpen={openModal}
      open={isOpen}
      trigger={<Button circular content="新しい通知設定を作る" color="blue" />}
    >
      <Modal.Header>通知設定</Modal.Header>
      <Modal.Content>
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
          <Form.Button color="blue" circular onClick={handleClick} disabled={isDisabled}>
            登録
          </Form.Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
