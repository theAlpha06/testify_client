'use client'

import React from "react";
import "./globals.css";
import { Shrikhand } from "next/font/google";
import { Flex, Layout as AntdLayout } from "antd";
const { Header, Footer, Content } = AntdLayout;
import NextBreadCrum from "@/components/BreadCrumb";
import UserAvatar from "@/components/Avatar";
import styled from "styled-components";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const Layout = styled(AntdLayout)`
  height: 100vh;
`;
const StyledFooter = styled(Footer)`
  text-align: center;
`;

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

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <Layout>
          <StyledHeader>
            <StyledDiv className={shrikhand.className}>Testify</StyledDiv>
            <UserAvatar />
          </StyledHeader>
          <Content style={{ padding: "0 36px" }}>
            <NextBreadCrum />
            <Flex
              vertical
              align="center"
              justify="center"
              style={{
                background: "white",
                height: "100%",
                padding: 16,
                borderRadius: 10,
              }}
            >
              {children}
            </Flex>
          </Content>
          <StyledFooter>
            <em>Testify</em> ©{new Date().getFullYear()} Made with ❤️
          </StyledFooter>
        </Layout>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
