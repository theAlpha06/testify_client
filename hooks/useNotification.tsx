// hooks/useNotify.ts
import { notification } from 'antd';
import { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];

interface NotifyConfig {
  message: string;
  description: string;
  placement?: NotificationPlacement;
}

const useNotify = () => {
  const [api, contextHolder] = notification.useNotification();

  const notify = ({ message, description, placement = 'topRight' }: NotifyConfig) => {
    api.info({
      message,
      description,
      placement,
    });
  };

  return { notify, contextHolder };
};

export default useNotify;
