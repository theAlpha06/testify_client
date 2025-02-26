"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import useNotify from "@/hooks/useNotification";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FieldType {
  username: string;
  password: string;
  email: string;
}

const SignUp: React.FC = (): JSX.Element => {
  const { notify, contextHolder } = useNotify();
  const [form] = Form.useForm();
  const router = useRouter(); 

  const handleNotify = (
    placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
  ) => {
    notify({
      message: 'Registered!',
      description: "You have been successfully registered!",
      placement,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signup`, {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      form.resetFields();
      handleNotify("topRight");
      setTimeout(() => {
        router.push("/signin");
      }, 2000)
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
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
    </>
  );
};

export default SignUp;
