"use client";
import { StarFilled } from "@ant-design/icons";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import type { FormProps } from "antd";
import useNotify from "@/hooks/useNotification";
import { Button, Flex, Form, Input } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";

interface FieldType {
  username: string;
  feedback: string;
  email: string;
}

const rating = (
  <>
    <StarFilled style={{ fontSize: "1rem", color: "yellow" }} />{" "}
    <StarFilled style={{ fontSize: "1rem", color: "yellow" }} />{" "}
    <StarFilled style={{ fontSize: "1rem", color: "yellow" }} />{" "}
    <StarFilled style={{ fontSize: "1rem", color: "yellow" }} />{" "}
    <StarFilled style={{ fontSize: "1rem", color: "yellow" }} />{" "}
  </>
);

const Testimonial: React.FC = (): JSX.Element => {
  const { TextArea } = Input;
  const params = useParams();

  const { notify, contextHolder } = useNotify();

  const developerUsername = params?.username;


  const StyledFlex = styled(Flex)`
    width: 100%;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    h1 {
      padding: 0.5rem;
    }
    p {
      padding: 0.5rem;
    }
    section {
      p {
        font-weight: bold;
      }
    }
    ul {
      padding: 1rem;
    }
    @media (max-width: 1000px) {
      width: 90%;
    }
  `;

  const FormContainer = styled(Form)`
    width: 60%;
    @media (max-width: 1000px) {
      width: 90%;
    }
  `;

  const handleNotify = (
    placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
  ) => {
    notify({
      message: "Registered!",
      description: "Your review has been successfully registered!",
      placement,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (!developerUsername) {
      console.error("Developer username is not defined in the URL.");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/reviews/${developerUsername}/new`,
        {
          review_description: values.feedback,
          reviewer_username: values.username,
          reviewer_email: values.email,
        }
      );
      handleNotify("topRight");
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  return (
    <StyledFlex justify="center" align="center">
      {contextHolder}
      <Container>
        <section>
          <h1>Testify Our Work</h1>
          <p>Hope you enjoyed working with us!</p>
          <section>
            <p>QUESTIONS</p>
            <ul>
              <li>Who are you / what are you working on?</li>
              <li>How has our product helped you?</li>
              <li>What is the best thing about our project?</li>
            </ul>
          </section>
        </section>
      </Container>
      {developerUsername ? (
        <FormContainer
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="vertical"
          style={{ width: "60%" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="feedback"
            label={rating}
            rules={[{ required: true, message: "Please give your feedback" }]}
          >
            <TextArea rows={4} placeholder="Feedback" />
          </Form.Item>
          <Form.Item<FieldType>
            name="username"
            label="Your Username"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            name="email"
            label="Your Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </FormContainer>
      ) : (
        <p>Loading...</p>
      )}
    </StyledFlex>
  );
};

export default Testimonial;
