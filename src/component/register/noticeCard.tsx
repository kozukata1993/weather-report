import React from 'react';
import { Button, Card, Label, List, Confirm } from 'semantic-ui-react';
import dayjs from 'dayjs';
import { deleteNotice } from '../../firebase/firestore';
import { useMessage } from '../../customHooks/useMessage';
import { StoreNotice } from '../../interface';

interface NoticeCardProps {
  notice: StoreNotice;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({ notice }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const displayTime = (time: number) => {
    return ['6:00', '7:00', '8:00'][[6, 7, 8].indexOf(time)];
  };

  const cityName = (city: string) => {
    return ['東京都', '大阪市', '名古屋市', '盛岡市'][
      ['tokyo', 'osaka', 'nagoya', 'morioka'].indexOf(city)
    ];
  };

  const displayWebhookUrl = (url: string) => {
    return url.length > 40 ? `${url.substr(0, 27)}...${url.substr(-10)}` : url;
  };

  const displayMessage = useMessage();
  const handleConfirmClick = async () => {
    await deleteNotice(notice.id);
    setIsOpen(false);
    displayMessage('通知を削除しました', 'red');
  };

  return (
    <>
      <Card fluid>
        <Card.Content>
          <Card.Header content={notice.city} />
          <Card.Meta content={`登録日: ${dayjs(notice.createdAt).format('YYYY/M/D')}`} />
          <Card.Description>
            <List divided>
              <List.Item>
                <Label horizontal content="通知する時刻" color="green" />
                {displayTime(notice.time)}
              </List.Item>
              <List.Item>
                <Label horizontal content="都市" color="green" />
                {cityName(notice.city)}
              </List.Item>
              <List.Item>
                <Label horizontal content="Webhook URL" color="green" />
                {displayWebhookUrl(notice.webhookUrl)}
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            circular
            basic
            color="red"
            content="削除"
            size="tiny"
            onClick={() => setIsOpen(true)}
          />
        </Card.Content>
      </Card>
      <Confirm
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={handleConfirmClick}
        content="この通知を削除してよろしいですか？"
        cancelButton="Cancel"
        confirmButton="Delete"
        size="mini"
      />
    </>
  );
};
