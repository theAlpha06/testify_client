import React from 'react';
import useStore from '@/store/user';
import { Space } from 'antd';
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  color: #ffffff;
  border: 2px solid #ffffff; 
  background: none;
  margin-left: 8px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2rem; 

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: #ffffff; 
  }

  &:focus {
    outline: none;
  }

  .icon {
    margin-right: 8px; 
  }
`;

const UserAvatar: React.FC = (): JSX.Element => {
  const { username, logout } = useStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/signin'); 
  };

  return (
    <>
      {username ? (
        <AvatarContainer>
          <Space size={16} wrap>
            <Link href={"/dashboard"} style={{ color: '#ffffff' }}>Hi! {username}</Link>
            <StyledButton onClick={handleLogout}>
              <LogoutOutlined className="icon" />
              Logout
            </StyledButton>
          </Space>
        </AvatarContainer>
      ) : (
        <StyledButton onClick={() => router.push('/signin')}>
          <LoginOutlined className="icon" />
          Login
        </StyledButton>
      )}
    </>
  );
};

export default UserAvatar;
