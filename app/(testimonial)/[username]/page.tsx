"use client";
import { StarFilled } from "@ant-design/icons";
import styled from "styled-components";
import React from "react";
import type { FormProps } from "antd";
import { renderToString } from "react-dom/server";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import useNotify from "@/hooks/useNotification";

interface FieldType {
  username: string;
  password: string;
  remember?: string;
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
`

const Testimonial: React.FC = (): JSX.Element => {
  const { TextArea } = Input;
  return (
    <StyledFlex justify="center" align="center">
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
      <FormContainer
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={rating}
          rules={[{ required: true, message: "Please give your feedback" }]}
        >
          <TextArea rows={4} placeholder="Feedback" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Your Name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
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
    </StyledFlex>
  );
};

export default Testimonial;
