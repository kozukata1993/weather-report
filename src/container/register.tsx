import React from 'react';
import { useSelector } from 'react-redux';
import { InputOnChangeData, DropdownProps } from 'semantic-ui-react';
import { RegisterComponent } from '../components/register/register';
import { useMessage } from '../customHooks/useMessage';
import { registerNotice } from '../firebase/firestore';
import { Store } from '../interface';

export const Register: React.FC = () => {
  const [city, setCity] = React.useState<string | null>(null);
  const [time, setTime] = React.useState<number | null>(null);
  const [webhookUrl, setWebhookUrl] = React.useState<string>('');
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const notices = useSelector((store: Store) => store.notices);

  const displayMessage = useMessage();
  const isDisabled = !(
    city &&
    (time || time === 0) &&
    webhookUrl.match(/https:\/\/hooks.slack.com\/[\w/]*/)
  );

  const handleChangeCity = (e: React.FormEvent, { value }: DropdownProps) => {
    if (typeof value === 'string') {
      setCity(value);
    }
  };

  const handleChangeTime = (e: React.FormEvent, { value }: DropdownProps) => {
    if (typeof value === 'number') {
      setTime(value);
    }
  };

  const handleChangeWebhookUrl = (e: React.FormEvent, { value }: InputOnChangeData) => {
    setWebhookUrl(value);
  };

  const handleClick = async () => {
    if (city && (time || time === 0) && webhookUrl) {
      await registerNotice(city, time, webhookUrl);
      setWebhookUrl('');
      setIsOpen(false);
      displayMessage('通知設定を登録しました', 'blue');

      return;
    }
    displayMessage('ERROR', 'red');
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <RegisterComponent
      notices={notices}
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
  );
};
