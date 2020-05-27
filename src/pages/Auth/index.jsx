import React from 'react';
import {Form, Input, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Block, Button} from "../../components";
import './Auth.scss'



const Auth = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
}
  return (
     <section className='auth'>
       <div className="auth__content">
         <div className="auth__top">
           <h2>Войти в аккаутн</h2>
           <p>Пожалуйта, войдите в свой аккаунт</p>
         </div>
         <Block>
           <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
           >
             <Form.Item
                validateStatus='success'
                hasFeedback
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
             >
               <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username" size='large'/>
             </Form.Item>
             <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
             >
               <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="Password"
                  size='large'
               />
             </Form.Item>


             <Form.Item>
               <Button type="primary" size='large'>
               Войти в аккаунт
               </Button>
             </Form.Item>
               <a className='auth register-link' href="">Зарегестрироваться</a>
           </Form>
         </Block>
       </div>
     </section>
  );
};

export default Auth;