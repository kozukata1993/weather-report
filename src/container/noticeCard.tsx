import React from 'react';
import { NoticeCardComponent } from '../component/register/noticeCard';
import { deleteNotice } from '../firebase/firestore';
import { useMessage } from '../customHooks/useMessage';
import { StoreNotice } from '../interface';

interface NoticeCardProps {
  notice: StoreNotice;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({ notice }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const openConfirm = () => {
    setIsOpen(true);
  };
  const closeConfirm = () => {
    setIsOpen(false);
  };

  const displayMessage = useMessage();
  const handleConfirmClick = async () => {
    await deleteNotice(notice.id);
    setIsOpen(false);
    displayMessage('通知を削除しました', 'red');
  };

  return (
    <NoticeCardComponent
      notice={notice}
      isOpen={isOpen}
      handleConfirmClick={handleConfirmClick}
      openConfirm={openConfirm}
      closeConfirm={closeConfirm}
    />
  );
};
