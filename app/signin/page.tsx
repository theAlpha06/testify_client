"use client";

import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import useNotify from "@/hooks/useNotification";
import getName from "@/getUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import useStore from "@/store/user";

interface FieldType {
  username: string;
  password: string;
  remember?: string;
}

const SignIn: React.FC = (): JSX.Element => {
  const { notify, contextHolder } = useNotify();
  const [form] = Form.useForm();
  const { login } = useStore();
  const router = useRouter();

  const handleNotify = (
    placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight"
  ) => {
    notify({
      message: `Logged In!`,
      description: "Redirecting...",
      placement,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
        {
          username: "Biswadeep2",
          password: "biswa123123",
        }
      );
      const user = getName(response?.data?.access_token);
      login(user.username);
      handleNotify("topRight");
      form.resetFields();
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
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
        name="basic"
        form={form}
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
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
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

export default SignIn;
