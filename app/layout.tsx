"use client";

import React from "react";
import "./globals.css";
import { Flex, Layout as AntdLayout } from "antd";
const { Footer, Content } = AntdLayout;
import NextBreadCrum from "@/components/BreadCrumb";
import styled from "styled-components";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainHeader from "@/components/Header";

const Layout = styled(AntdLayout)`
  height: 100vh;
`;
const StyledFooter = styled(Footer)`
  text-align: center;
`;

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <Layout>
          <MainHeader />
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
