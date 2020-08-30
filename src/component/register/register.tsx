import React from 'react';
import { Header, DropdownProps, InputOnChangeData } from 'semantic-ui-react';
import { RegisterModal } from './registerModal';
import { NoticeCard } from './noticeCard';
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
  console.log(notices);

  return (
    <>
      <Header>Register</Header>
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
