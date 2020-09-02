import React from 'react';
import { Header, DropdownProps, InputOnChangeData } from 'semantic-ui-react';
import { RegisterModal } from './registerModal';
import { NoticeCard } from '../../container/noticeCard';
import { StoreNotice } from '../../interface';

interface RegisterProps {
  notices: StoreNotice[] | null;
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

export const RegisterComponent: React.FC<RegisterProps> = ({
  notices,
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
  return (
    <>
      <Header>Register</Header>
      <p>
        <a href="https://slack.com/intl/ja-jp/help/articles/115005265063-Slack-%E3%81%A7%E3%81%AE-Incoming-Webhook-%E3%81%AE%E5%88%A9%E7%94%A8">
          SlackのIncoming Webhook
        </a>
        を使って、天気を通知させることができます。
      </p>
      <RegisterModal
        handleChangeCity={handleChangeCity}
        handleChangeTime={handleChangeTime}
        handleChangeWebhookUrl={handleChangeWebhookUrl}
        handleClick={handleClick}
        webhookUrl={webhookUrl}
        isDisabled={isDisabled}
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
      />
      {notices ? notices.map((notice) => <NoticeCard notice={notice} />) : <></>}
    </>
  );
};
