import React from 'react';
import { InputOnChangeData, DropdownProps } from 'semantic-ui-react';
import { RegisterComponent } from '../component/register';
import { useMessage } from '../customHooks/useMessage';
import { registerNotice } from '../firebase/firestore';

export const Register: React.FC = () => {
  const [city, setCity] = React.useState<string | null>(null);
  const [time, setTime] = React.useState<number | null>(null);
  const [webhookUrl, setWebhookUrl] = React.useState<string>('');

  const displayMessage = useMessage();
  const isDisabled = !(city && time && webhookUrl.match(/https:\/\/hooks.slack.com\/[\w/]*/));

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
    if (city && time && webhookUrl) {
      await registerNotice(city, time, webhookUrl);
      setWebhookUrl('');
      displayMessage('通知設定を登録しました', 'blue');

      return;
    }
    displayMessage('ERROR', 'red');
  };

  return (
    <RegisterComponent
      handleChangeCity={handleChangeCity}
      handleChangeTime={handleChangeTime}
      handleChangeWebhookUrl={handleChangeWebhookUrl}
      handleClick={handleClick}
      webhookUrl={webhookUrl}
      isDisabled={isDisabled}
    />
  );
};
