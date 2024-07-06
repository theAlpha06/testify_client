import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const UserAvatar: React.FC = () => (
  <Space size={16} wrap>
    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<UserOutlined />} />
  </Space>
);

export default UserAvatar;