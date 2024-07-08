"use client";

import React, { useState, useEffect } from "react";
import { Flex, Switch, Space } from "antd";
import styled from "styled-components";
import ClipboardJS from "clipboard";

const DashboardContainer = styled(Flex)`
  height: 100%;
  width: 100%;
`;

const FrameWrapper = styled.div`
  width: 50%;
`;

const FrameContainer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const LinkWrapper = styled(Flex)`
  width: 50%;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const EmbedContainer = styled.div``;

const LinkContainer = styled.div`
  padding: 1rem;
  width: 70%;
  margin-top: 5px;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  margin-top: 2rem;
`;

const Dashboard: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(`Copied to clipboard: ${text}`);
      })
      .catch((error) => {
        console.error("Copy to clipboard failed: ", error);
      });
  };

  const initClipboard = () => {
    const clipboard = new ClipboardJS(".copy-link");
    clipboard.on("success", function (e) {
      console.log(`Copied to clipboard: ${e.text}`);
      e.clearSelection();
    });
    clipboard.on("error", function (e) {
      console.error("Copy to clipboard failed: ", e.action);
    });
  };

  useEffect(() => {
    initClipboard();
  }, []);

  const iframeCode = `<iframe height="100%" frameBorder="0" scrolling="no" src="${process.env.NEXT_PUBLIC_TESTIMONIAL_URL}/testing?theme=${theme}" width="100%"></iframe>`;

  return (
    <DashboardContainer>
      <LinkWrapper>
        <EmbedContainer>
          <h2>Embed the testimonials on your website</h2>
          <LinkContainer
            className="copy-link"
            onClick={() => handleCopyToClipboard(iframeCode)}
          >
            {iframeCode}
          </LinkContainer>
        </EmbedContainer>
        <ProfileContainer>
          <h2>Get your review from the below link</h2>
          <LinkContainer
            className="copy-link"
            onClick={() =>
              handleCopyToClipboard(
                `${process.env.NEXT_PUBLIC_BASE_URL}/thealpha06`
              )
            }
          >
            {`${process.env.NEXT_PUBLIC_BASE_URL}/thealpha06`}
          </LinkContainer>
        </ProfileContainer>
        <Space direction="vertical" style={{ marginTop: "2rem" }}>
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </Space>
      </LinkWrapper>
      <FrameWrapper>
        <FrameContainer
          src={`${process.env.NEXT_PUBLIC_TESTIMONIAL_URL}/testing?theme=${theme}`}
        />
      </FrameWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
