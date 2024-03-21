"use client";

import React from "react";
import zod from 'zod';
import { Button, Form, Input } from "antd"; 
import { Rule } from "antd/es/form";
// import Form.Item from "antd/es/form/FormForm.Item";
// import { SubmitHandler } from "react-hook-form";

export default function Page() {

  const FormSchema = zod.object({
    email: zod.string().trim().email(),
    password: zod.string().trim().min(1)
  }).strict()

  // type FormType = zod.infer<typeof FormSchema>

  const onFinish = (event: React.FormEvent) => {
    const validation = FormSchema.safeParse(event);
    console.log(validation)
    console.log(event);
  }


  return (

    <>
      <Form onFinish={onFinish}>
        <Form.Item required name="email" label="Informe o seu Email" rules={[ { required: true } ]}>
          <Input />
        </Form.Item>
        <Form.Item required name="password" label="Informe a sua Senha" rules={[ { required: true } ]}>
          <Input />
        </Form.Item>
        <Button htmlType="submit">Enviar dados</Button>
      </Form>
    </>
  );
}
