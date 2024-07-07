"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import axios from "axios";

interface FieldType {
  username: string;
  password: string;
  email: string;
}

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  try {
    const response = await axios.post(``, {
      username: values.username,
      email: values.email,
      password: values.password
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Axios Error:', error);
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignUp: React.FC = (): JSX.Element => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
