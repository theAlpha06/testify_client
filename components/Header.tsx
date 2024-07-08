import { Shrikhand } from "next/font/google";
import { Layout as AntdLayout } from "antd";
import UserAvatar from "@/components/Avatar";
import styled from "styled-components";
const { Header} = AntdLayout;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
`;

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const StyledDiv = styled.div`
  color: white;
  font-size: 2rem;
`;

const MainHeader: React.FC = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledDiv className={shrikhand.className}>Testify</StyledDiv>
      <UserAvatar />
    </StyledHeader>
  );
};

export default MainHeader;
