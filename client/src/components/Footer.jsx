import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import '../styles/footer.scss';

const Footer = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
  };

  return (
    <div className="footer__color">
      <div className='container'>
        <div className="row">
          <div className="col-6">
            <img src="" alt="" /><img src="" alt="" />
            <img src="" alt="" /><img src="" alt="" />
          </div>
          <div className="col-6">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                  {
                    type: 'email',
                  },
                ]}
              >
                <Input />
              </Form.Item>


              <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
